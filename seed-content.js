const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function seed() {
  console.log("Querying target rows matching 'Agriculture'...");
  
  const { data: subjects, error: subError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.Agriculture,name.ilike.Agriculture & Nutrition');

  if (subError || !subjects || subjects.length === 0) {
    console.error("Could not find any matching subject rows.", subError);
    return;
  }

  console.log(`Found ${subjects.length} active subject branches. Generating topic curriculum entries...`);

  const topicsToInsert = [];

  for (const subjectRow of subjects) {
    topicsToInsert.push({
      subject_id: subjectRow.id,
      name: "Soil Conservation",
      description: "Learn how to protect valuable topsoil from erosion using standard farming practices.",
      order_index: 1,
      content: `## Introduction to Soil Conservation

Soil is one of our most important natural resources. Without healthy topsoil, we cannot grow food for our families or communities. Soil conservation means protecting the soil from washing or blowing away.

### Methods of Soil Conservation

There are several key practices used in Kenyan schools and farms to preserve soil:

- **Mulching**: Covering the soil with organic matter like dry grass or leaves to retain moisture and prevent runoff.
- **Cover Cropping**: Planting low-growing plants like sweet potatoes or beans to protect the bare ground from heavy rainfall.
- **Tree Planting**: Roots from trees hold soil particles firmly together, shielding the landscape against heavy winds.

**Note**
Always ensure your garden beds are protected before the long rainy season begins to prevent severe sheet erosion!

**Example**
In our school garden project, we used maize stalks left over from last season to form basic mulch barriers along our vegetable patches.`
    });
  }

  console.log(`Streaming ${topicsToInsert.length} data rows to Supabase clusters...`);
  
  const { data, error } = await supabase
    .from('topics')
    .insert(topicsToInsert)
    .select('id, subject_id, name');

  if (error) {
    console.error("Error inserting seed records into 'topics' table:", error);
  } else {
    console.log("Success! Deep topic content synced across all structural paths:", data);
  }
}

seed();