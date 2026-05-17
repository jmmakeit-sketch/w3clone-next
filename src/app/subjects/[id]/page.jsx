import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export const revalidate = 0; // Don't cache, pull fresh from DB

export default async function SubjectWorkspacePage({ params }) {
  // Resolve dynamic URL params correctly
  const resolvedParams = await params;
  const subjectId = resolvedParams.id;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 1. Fetch Subject Meta Details
  const { data: subject, error: subjectError } = await supabase
    .from('subjects')
    .select('*')
    .eq('id', subjectId)
    .single();

  if (subjectError || !subject) {
    return (
      <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
        <h2>❌ Subject Stream Not Found</h2>
        <p>The requested ID does not match any current syllabus records.</p>
        <Link href="/subjects" style={{ color: '#04AA6D' }}>&larr; Back to Portal Dashboard</Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif', color: '#222' }}>
      
      {/* LEFT NAVIGATION SIDEBAR */}
      <aside style={{ 
        width: '260px', 
        backgroundColor: '#f1f1f1', 
        borderRight: '1px solid #e0e0e0',
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <div style={{ padding: '0 10px 15px 10px', borderBottom: '1px solid #dcdcdc' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#666', uppercase: 'true' }}>COURSE STUDY STREAMS</span>
          <h2 style={{ fontSize: '1.2rem', margin: '5px 0 0 0', color: '#04AA6D' }}>{subject.name}</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '15px' }}>
          <div style={{ padding: '10px', backgroundColor: '#04AA6D', color: '#fff', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            📚 Introduction & Core Notes
          </div>
          <div style={{ padding: '10px', color: '#333', borderRadius: '4px', cursor: 'pointer' }} className="hover-menu">
            📝 Strand 1: Foundations
          </div>
          <div style={{ padding: '10px', color: '#333', borderRadius: '4px', cursor: 'pointer' }} className="hover-menu">
            🎨 Strand 2: Creative Expression
          </div>
          <div style={{ padding: '10px', color: '#333', borderRadius: '4px', cursor: 'pointer' }} className="hover-menu">
            ⚽ Strand 3: Games & Sports Arts
          </div>
        </nav>

        <div style={{ marginTop: 'auto', padding: '10px' }}>
          <Link href="/subjects" style={{ textDecoration: 'none', color: '#555', fontSize: '0.9rem' }}>
            &larr; Exit to Main Portal
          </Link>
        </div>
      </aside>

      {/* CENTER REPLICATED W3SCHOOLS WORKSPACE */}
      <main style={{ flex: 1, padding: '40px 60px', backgroundColor: '#ffffff', overflowY: 'auto' }}>
        <div style={{ maxWidth: '850px' }}>
          <span style={{ color: '#888', fontSize: '0.9rem', fontWeight: '500' }}>Grade 7 CBC Curriculum Workspace</span>
          <h1 style={{ fontSize: '2.8rem', margin: '5px 0 20px 0', color: '#212121' }}>{subject.name}</h1>
          
          <div style={{ backgroundColor: '#D9EEE1', padding: '25px', borderRadius: '6px', marginBottom: '30px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#212121' }}>Learning Objectives & Overview</h3>
            <p style={{ margin: 0, color: '#212121', lineHeight: '1.6' }}>
              Welcome to the digital portal for {subject.name}. This module compiles all approved CBC curriculum notes, inline terminology cards, interactive sketches, and checkpoint validation questions.
            </p>
          </div>

          <section style={{ borderLeft: '4px solid #04AA6D', paddingLeft: '20px', margin: '30px 0' }}>
            <h2 style={{ color: '#212121' }}>1.1 Introduction to Media and Material Exploration</h2>
            <p style={{ lineHeight: '1.7', color: '#444' }}>
              In Grade 7, learning focuses on identifying components of visual art forms and physical sports dynamics. Students investigate local resources, tools, and platforms to express cultural identity and refine presentation methodologies.
            </p>
          </section>

          {/* INTERACTIVE COMPONENT BOX */}
          <div style={{ border: '1px solid #e0e0e0', borderRadius: '6px', marginTop: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ backgroundColor: '#f1f1f1', padding: '12px 20px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', fontWeight: 'bold', fontSize: '0.95rem' }}>
              💡 Quick Checkpoint Question
            </div>
            <div style={{ padding: '25px' }}>
              <p style={{ margin: '0 0 15px 0', fontWeight: '600' }}>Which of the following elements represents a key pillar of visual art forms in CBC Grade 7?</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
                  <input type="radio" name="quiz" /> Elements of Line, Forms, and Textures
                </label>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
                  <input type="radio" name="quiz" /> Abstract Data Architecture
                </label>
              </div>
              
              <button style={{ marginTop: '20px', backgroundColor: '#04AA6D', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
                Submit Answer
              </button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}