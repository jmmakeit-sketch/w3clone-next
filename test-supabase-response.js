const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function inspectDataFields() {
  console.log("--- SUPABASE DATABASE ENGINE FIELD INSPECTION ---");
  
  const { data, error } = await supabase
    .from('subjects')
    .select('*')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%')
    .limit(1);

  if (error) {
    console.error("❌ Connection Error:", error.message);
    return;
  }

  if (!data || data.length === 0) {
    console.log("⚠️ No rows returned from the 'subjects' table. Check if your table name matches exactly.");
    return;
  }

  console.log("✅ Row successfully retrieved!");
  console.log("Available object keys inside your table data rows are:");
  console.log(JSON.stringify(data[0], null, 2));
}

inspectDataFields();