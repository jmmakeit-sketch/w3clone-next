const fs = require('fs');
const path = require('path');

// Ensure directories exist
const subjectsDir = path.join(__dirname, 'src', 'app', 'subjects');
const dynamicDir = path.join(subjectsDir, '[id]');

fs.mkdirSync(subjectsDir, { recursive: true });
fs.mkdirSync(dynamicDir, { recursive: true });

// 1. Create the Main Subjects Portal Page
const portalCode = `import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export const revalidate = 0; // Fetch fresh live database records on every load

export default async function SubjectsPortalPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Fetch all creative arts/sports streams synced by our seeders
  const { data: subjects } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#212121', borderBottom: '3px solid #4CAF50', paddingBottom: '10px' }}>
        CBC Grade 7 Learning Portal
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', margin: '20px 0 40px 0' }}>
        Select your specific course stream channel below to view the interactive W3Schools-styled curriculum material.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {subjects?.map((sub) => (
          <Link href={\`/subjects/\${sub.id}\`} key={sub.id} style={{ textDecoration: 'none' }}>
            <div className="w3-card" style={{ padding: '24px', border: '1px solid #e0e0e0', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#009688' }}>{sub.name}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>ID: {sub.id.substring(0,8)}... Click to Study &rarr;</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}`;

// 2. Create the Dynamic Canvas with Left Sidebar Navigation & Raw HTML Parsing Support
const dynamicCanvasCode = `import { createClient } from '@supabase/supabase-js';
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
              href={\`/subjects/\${id}?strand=\${topic.order_index}\`} 
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
}`;

fs.writeFileSync(path.join(subjectsDir, 'page.jsx'), portalCode);
fs.writeFileSync(path.join(dynamicDir, 'page.jsx'), dynamicCanvasCode);

console.log("📥 Next.js frontend pages created successfully inside src/app/subjects/!");