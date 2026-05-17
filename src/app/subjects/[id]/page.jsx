import { createClient } from '@supabase/supabase-js';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';

export const revalidate = 0;

export default async function DynamicSubjectCanvas({ params, searchParams }) {
  const { id } = params;
  // Get active selected strand from query or default to index 1
  const currentStrandIndex = parseInt(searchParams.strand || '1', 10);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 1. Fetch current subject info
  const { data: subject } = await supabase.from('subjects').select('name').eq('id', id).single();

  // 2. Fetch all chronological topic strands assigned to this course channel
  const { data: topics } = await supabase
    .from('topics')
    .select('id, name, description, order_index, content')
    .eq('subject_id', id)
    .order('order_index', { ascending: true });

  const activeTopic = topics?.find(t => t.order_index === currentStrandIndex) || topics?.[0];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* LEFT SIDEBAR NAVIGATION NAVIGATION LINK GRID */}
      <aside style={{ width: '320px', backgroundColor: '#f1f1f1', borderRight: '1px solid #ddd', padding: '20px', boxSizing: 'border-box' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '0.85rem', textTransform: 'uppercase', color: '#777' }}>Course Map</h4>
        <h2 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', color: '#333' }}>{subject?.name || 'Creative Arts'}</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {topics?.map((topic) => (
            <Link 
              href={`/subjects/${id}?strand=${topic.order_index}`} 
              key={topic.id}
              style={{
                padding: '10px 12px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                backgroundColor: topic.order_index === currentStrandIndex ? '#4CAF50' : 'transparent',
                color: topic.order_index === currentStrandIndex ? '#fff' : '#333',
                fontWeight: topic.order_index === currentStrandIndex ? 'bold' : 'normal',
                border: '1px solid',
                borderColor: topic.order_index === currentStrandIndex ? '#4CAF50' : '#e0e0e0'
              }}
            >
              {topic.name.split(':')[0]} {/* Display Short Title Strand label e.g Strand 1.0 */}
            </Link>
          ))}
        </nav>
      </aside>

      {/* MAIN DOCUMENTATION DOCUMENTATION DISPLAY AREA */}
      <main style={{ flex: 1, padding: '40px', maxWidth: '850px', margin: '0 auto', boxSizing: 'border-box' }}>
        {activeTopic ? (
          <div>
            <div style={{ marginBottom: '12px', color: '#777', fontSize: '0.9rem' }}>
              {subject?.name} &gt; {activeTopic.name}
            </div>
            {/* Render with raw HTML enabled to load Try-Its, simulators, and check buttons dynamically */}
            <div className="prose prose-slate max-w-none">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {activeTopic.content}
              </ReactMarkdown>
            </div>
          </div>
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
            <h3>No curriculum topics loaded yet for this track.</h3>
            <p>Verify that your seeder ran perfectly against ID: {id}</p>
          </div>
        )}
      </main>
    </div>
  );
}