import { createClient } from '@supabase/supabase-js';
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
          <Link href={`/subjects/${sub.id}`} key={sub.id} style={{ textDecoration: 'none' }}>
            <div className="w3-card" style={{ padding: '24px', border: '1px solid #e0e0e0', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#009688' }}>{sub.name}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#777' }}>ID: {sub.id.substring(0,8)}... Click to Study &rarr;</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}