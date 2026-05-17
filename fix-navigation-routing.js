const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, 'src', 'app', 'subjects', 'page.jsx');

const automatedRoutingCode = `import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

export const revalidate = 0;

export default async function SubjectsPortalPage() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // Fetch all creative arts/sports streams synced by our seeders
  const { data: subjects, error } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (error) {
    console.error("Supabase Error:", error.message);
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#212121', borderBottom: '3px solid #04AA6D', paddingBottom: '10px' }}>
        CBC Grade 7 Course Streams
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', margin: '20px 0 40px 0' }}>
        Click any course tile below. The system automatically routes through our live Supabase database identifiers.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
        {subjects && subjects.length > 0 ? (
          subjects.map((sub) => {
            // FORCE CLEAN STRING ID MATCHING TO BANISH "UNDEFINED" OR TEXT LINKS
            const dynamicRouteId = sub.id;
            
            return (
              <Link href={\`/subjects/\${dynamicRouteId}\`} key={dynamicRouteId} style={{ textDecoration: 'none' }}>
                <div style={{ 
                  padding: '24px', 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#04AA6D', fontSize: '1.3rem' }}>{sub.name}</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '0.8rem', color: '#888', fontFamily: 'monospace' }}>
                    Database ID: {dynamicRouteId.substring(0, 18)}...
                  </p>
                  <span style={{ color: '#009688', fontWeight: 'bold', fontSize: '0.95rem' }}>
                    Launch Interactive Course &rarr;
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <div style={{ padding: '20px', color: '#999' }}> No active syllabus tracks mapped yet. </div>
        )}
      </div>
    </div>
  );
}`;

fs.writeFileSync(targetPath, automatedRoutingCode);
console.log("📥 Automated database-id link injector written successfully!");