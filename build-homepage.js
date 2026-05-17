const fs = require('fs');
const path = require('path');

const homePagePath = path.join(__dirname, 'src', 'app', 'page.jsx');

const homePageCode = `import Link from 'next/link';

export default function W3SchoolsMasterHomePage() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', margin: 0, padding: 0, backgroundColor: '#fa7a5a', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center' }}>
      
      {/* Hero Banner Section */}
      <div style={{ padding: '40px 20px', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4.2rem', fontWeight: 'bold', margin: '0 0 10px 0', letterSpacing: '-1px' }}>
          CBC Learning Portal
        </h1>
        <p style={{ fontSize: '1.6rem', fontWeight: '500', color: '#fff', marginBottom: '40px' }}>
          The World's Largest Competency Based Curriculum Tutorial Library.
        </p>

        {/* Big W3 Search Box Simulator */}
        <div style={{ maxWidth: '600px', margin: '0 auto 50px auto', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', borderRadius: '25px', overflow: 'hidden' }}>
          <input 
            type="text" 
            placeholder="Search our Grade 7 strands, crafts, or exercises..." 
            style={{ flex: 1, padding: '16px 24px', border: 'none', fontSize: '1.1rem', outline: 'none', color: '#000' }}
            disabled
          />
          <button style={{ backgroundColor: '#04AA6D', border: 'none', color: 'white', padding: '0 30px', fontSize: '1.1rem', cursor: 'pointer' }}>
            🔍
          </button>
        </div>

        {/* DIRECT ACCESS ACTION BUTTON */}
        <Link href="/subjects" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#04AA6D',
            color: 'white',
            padding: '18px 44px',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            transition: 'transform 0.1s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#059862'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#04AA6D'}
          >
            Explore Visual Arts Content &rarr;
          </button>
        </Link>
      </div>

      {/* Mini Lower Navigation Guide */}
      <div style={{ marginTop: '40px', fontSize: '0.95rem', opacity: 0.9 }}>
        Built dynamically with Next.js Framework & Supabase Data Engines.
      </div>
    </div>
  );
}`;

fs.writeFileSync(homePagePath, homePageCode);
console.log("📥 Successfully generated core home landing page at src/app/page.jsx!");