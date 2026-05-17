const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'app', 'subjects', 'page.jsx');

const fixedPortalCode = `import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export const revalidate = 0; // Fresh database state retrieval on every load

export default async function SubjectsPortalPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Fetch target CBC subject matrices
  const { data: subjects, error } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (error) {
    console.error("Supabase Query Error on Frontend:", error.message);
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#212121', borderBottom: '3px solid #4CAF50', paddingBottom: '10px' }}>
        CBC Grade 7 Learning Portal
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', margin: '20px 0 40px 0' }}>
        Select your specific course stream channel below to view the interactive W3Schools-styled curriculum material.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {subjects && subjects.length > 0 ? (
          subjects.map((sub) => {
            // Explicitly assert structural key binding fallback to avoid undefined strings
            const currentId = sub.id || '';
            const currentName = sub.name || 'Creative Arts Stream';
            
            return (
              <Link href={\`/subjects/\${currentId}\`} key={currentId} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '24px', 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0', 
                  borderRadius: '6px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#04AA6D', fontSize: '1.25rem' }}>{currentName}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#777', fontFamily: 'monospace' }}>
                    ID: {currentId}
                  </p>
                  <div style={{ marginTop: '15px', fontSize: '0.9rem', color: '#009688', fontWeight: 'bold' }}>
                    Open Course Unit &rarr;
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div style={{ padding: '20px', color: '#999' }}>
            No subjects discovered. Verify your database connection environment parameters.
          </div>
        )}
      </div>
    </div>
  );
}`;

fs.writeFileSync(targetPath, fixedPortalCode);
console.log("📥 Successfully wrote un-broken map parsing layer to src/app/subjects/page.jsx!");