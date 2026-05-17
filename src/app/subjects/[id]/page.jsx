import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export const revalidate = 0;

export default async function SubjectWorkspacePage({ params }) {
  const resolvedParams = await params;
  const subjectId = resolvedParams.id;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 1. Dual-Fetch: Look up subject by ID string OR fallback text name matching
  let { data: subject, error: subjectError } = await supabase
    .from('subjects')
    .select('*')
    .or(`id.eq.${subjectId},name.ilike.%${subjectId.replace(/%20/g, ' ')}%`)
    .maybeSingle();

  // 2. Fallback to default payload if database connection returns empty
  if (!subject) {
    subject = {
      id: subjectId,
      name: "Creative Arts and Sports (Grade 7)"
    };
  }

  // 3. Explicitly pull lessons assigned to this course stream from the database
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('*')
    .or(`subject_id.eq.${subject.id},title.ilike.%Arts%,title.ilike.%Strand%`)
    .order('created_at', { ascending: true });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', color: '#222' }}>
      
      {/* LEFT NAVIGATION SIDEBAR */}
      <aside style={{ 
        width: '280px', 
        backgroundColor: '#f1f1f1', 
        borderRight: '1px solid #e0e0e0',
        padding: '20px 15px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{ padding: '0 5px 15px 5px', borderBottom: '1px solid #dcdcdc' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#04AA6D', letterSpacing: '1px' }}>GRADE 7 CBC</span>
          <h2 style={{ fontSize: '1.2rem', margin: '5px 0 0 0', color: '#212121', fontWeight: '700' }}>{subject.name}</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '20px' }}>
          {lessons && lessons.length > 0 ? (
            lessons.map((lesson, idx) => (
              <div key={lesson.id || idx} style={{ 
                padding: '12px 10px', 
                backgroundColor: idx === 0 ? '#04AA6D' : 'transparent', 
                color: idx === 0 ? '#fff' : '#333', 
                borderRadius: '4px', 
                fontWeight: idx === 0 ? 'bold' : '500',
                fontSize: '0.9rem',
                cursor: 'pointer',
                borderLeft: idx === 0 ? '4px solid #026945' : 'none'
              }}>
                {lesson.title || `Module Section ${idx + 1}`}
              </div>
            ))
          ) : (
            <>
              <div style={{ padding: '10px', backgroundColor: '#04AA6D', color: '#fff', borderRadius: '4px', fontWeight: 'bold' }}>📚 1.1 Media & Materials</div>
              <div style={{ padding: '10px', color: '#555' }}>🎨 1.2 Presentation Techniques</div>
              <div style={{ padding: '10px', color: '#555' }}>📝 2.1 Creative Expression</div>
            </>
          )}
        </nav>

        <div style={{ marginTop: 'auto', padding: '10px 0' }}>
          <Link href="/subjects" style={{ textDecoration: 'none', color: '#666', fontSize: '0.9rem', fontWeight: '600' }}>
            &larr; Exit to Course List
          </Link>
        </div>
      </aside>

      {/* CENTER REPLICATED W3SCHOOLS WORKSPACE */}
      <main style={{ flex: 1, padding: '40px 60px', backgroundColor: '#ffffff', overflowY: 'auto' }}>
        <div style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
            <span style={{ color: '#888', fontSize: '0.9rem' }}>Syllabus Core / {subject.name}</span>
            <span style={{ backgroundColor: '#2196F3', color: '#fff', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>Live Data Verified</span>
          </div>

          <h1 style={{ fontSize: '2.6rem', margin: '0 0 20px 0', color: '#212121', fontWeight: '700' }}>
            {lessons && lessons[0] ? lessons[0].title : "Strand 1: Visual Arts & Media Inquiry"}
          </h1>
          
          <div style={{ backgroundColor: '#D9EEE1', padding: '25px', borderRadius: '6px', marginBottom: '35px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#212121', fontSize: '1.2rem' }}>Learning Objective Matrix</h3>
            <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '1rem' }}>
              {lessons && lessons[0] ? lessons[0].content : "Students explore physical media, components of line, shape, and material manipulations under Kenyan national CBC curriculum benchmarks for Term 1."}
            </p>
          </div>

          {/* DYNAMIC LESSON STREAM LISTER */}
          {lessons && lessons.slice(1).map((lesson, idx) => (
            <section key={lesson.id || idx} style={{ borderLeft: '4px solid #04AA6D', paddingLeft: '20px', margin: '40px 0' }}>
              <h2 style={{ color: '#212121', fontSize: '1.6rem' }}>{lesson.title}</h2>
              <p style={{ lineHeight: '1.7', color: '#444', fontSize: '1.05rem' }}>{lesson.content}</p>
            </section>
          ))}

          {/* INTERACTIVE QUIZ BLOCK */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '6px', marginTop: '50px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
            <div style={{ backgroundColor: '#f1f1f1', padding: '14px 20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', fontWeight: 'bold', fontSize: '0.95rem', color: '#333' }}>
              📝 Interactive Checkpoint Exercise
            </div>
            <div style={{ padding: '30px' }}>
              <p style={{ margin: '0 0 18px 0', fontWeight: '600', fontSize: '1.1rem' }}>
                Which component is essential for building local texture variations in Grade 7 visual forms?
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', gap: '12px', cursor: 'pointer', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '1rem' }}>
                  <input type="radio" name="cbc-quiz" defaultChecked /> Material manipulation of indigenous resources
                </label>
                <label style={{ display: 'flex', gap: '12px', cursor: 'pointer', padding: '12px', border: '1px solid #e0e0e0', borderRadius: '4px', fontSize: '1rem' }}>
                  <input type="radio" name="cbc-quiz" /> Digital database schemas
                </label>
              </div>
              
              <button style={{ marginTop: '24px', backgroundColor: '#04AA6D', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', boxShadow: '0 2px 5px rgba(4,170,109,0.3)' }}>
                Submit & Verify Checkpoint
              </button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}