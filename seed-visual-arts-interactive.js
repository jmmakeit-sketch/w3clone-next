const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const interactiveStrand2Content = `# Strand 2.0: Picture Making
## Lesson 2.1: One-Point Perspective Drawing

**Perspective Drawing** is a technique used to create an illusion of three-dimensional depth (3D) on a flat two-dimensional (2D) surface.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Viewpoint Simulator</h3>
  <p>Select an Eye Level View to see how the Horizon Line moves:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn w3-blue" onclick="alert('Bird\\'s Eye View: Horizon line is HIGH. You look DOWN and see the TOP of the cuboid.')">Bird's Eye</button>
    <button class="w3-btn w3-green" onclick="alert('Normal Eye View: Horizon line is CENTERED. You see the front and sides of the cuboid.')">Normal Eye</button>
    <button class="w3-btn w3-red" onclick="alert('Worm\\'s Eye View: Horizon line is LOW. You look UP and see the BOTTOM of the cuboid.')">Worm's Eye</button>
  </div>
</div>

---

## Elements of Perspective Drawing
- **Horizon Line:** Represents the **eye level** of the observer.
- **Vanishing Point (VP):** The point where all lines meet and disappear.
- **Projection Lines:** Straight lines on the edges of an object that converge towards the VP.

<div class="w3-panel w3-light-grey" style="padding:16px; border-left:6px solid #4CAF50; margin:20px 0;">
  <h3>Test Yourself with an Exercise</h3>
  <p><b>Question:</b> Where is the Vanishing Point (VP) always located in a one-point perspective layout?</p>
  <form onsubmit="event.preventDefault(); const ans=this.vp_opt.value; if(ans==='correct'){alert('✅ Correct! It rests explicitly on the Horizon line.');}else{alert('❌ Try again!');}">
    <input type="radio" id="opt1" name="vp_opt" value="wrong"> <label for="opt1">On the Ground plane</label><br>
    <input type="radio" id="opt2" name="vp_opt" value="correct"> <label for="opt2">On the Horizon Line</label><br>
    <input type="radio" id="opt3" name="vp_opt" value="wrong"> <label for="opt3">Inside the center of the cuboid</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`;

const interactiveStrand3Content = `# Strand 2.2: Painting, Color Wheels and Scales

## Classifications of Colors
An artist must understand the structured properties of color combinations to pass CBC design assessments.

<div class="w3-example" style="background-color:#E7E9EB; padding:16px; border-radius:5px; margin:20px 0;">
  <h3>W3Schools Color Mixer Workbench</h3>
  <p>Click two Primary Colors to calculate the resulting Secondary Color:</p>
  <div style="display:flex; gap:10px; margin-bottom:15px;">
    <button class="w3-btn" style="background-color:#ff4d4d; color:white;" onclick="alert('Red + Yellow = ORANGE!')">Red + Yellow</button>
    <button class="w3-btn" style="background-color:#33b5e5; color:white;" onclick="alert('Blue + Yellow = GREEN!')">Blue + Yellow</button>
    <button class="w3-btn" style="background-color:#aa66cc; color:white;" onclick="alert('Blue + Red = VIOLET / PURPLE!')">Blue + Red</button>
  </div>
</div>

---

## Dimensions of Color
1. **Hue:** The pure name of the color.
2. **Value:** The lightness or darkness of a color.
   - **Tinting:** Adding white to a color.
   - **Shading:** Adding black to a color.
3. **Intensity:** The brightness or saturation of a color.

<div class="w3-panel w3-light-grey" style="padding:16px; border-left:6px solid #4CAF50; margin:20px 0;">
  <h3>Test Yourself with an Exercise</h3>
  <p><b>Question:</b> What is the artistic term used for adding white paint to a pure color hue?</p>
  <form onsubmit="event.preventDefault(); const ans=this.tint_opt.value; if(ans==='correct'){alert('✅ Correct! Adding white is known as Tinting.');}else{alert('❌ Incorrect! Shading is adding black.');}">
    <input type="radio" id="topt1" name="tint_opt" value="wrong"> <label for="topt1">Shading</label><br>
    <input type="radio" id="topt2" name="tint_opt" value="correct"> <label for="topt2">Tinting</label><br>
    <input type="radio" id="topt3" name="tint_opt" value="wrong"> <label for="topt3">Decortication</label><br><br>
    <button type="submit" class="w3-btn w3-black">Submit Answer</button>
  </form>
</div>`;

async function deployInteractiveW3() {
  console.log("Locating subject paths for interactive component rollout...");
  const { data: subjects, error: sError } = await supabase
    .from('subjects')
    .select('id, name')
    .or('name.ilike.%Visual Arts%,name.ilike.%Creative Arts%');

  if (sError || !subjects || subjects.length === 0) {
    console.error("No active subject channels discovered.", sError);
    return;
  }

  console.log(`Injecting live code interactive elements across ${subjects.length} target systems...`);

  for (const row of subjects) {
    // Inject Interactive Perspective Drawing
    await supabase.from('topics').upsert({
      subject_id: row.id,
      name: "Strand 2.1: One-Point Perspective Drawing",
      content: interactiveStrand2Content
    }, { onConflict: 'subject_id,name' });

    // Inject Interactive Painting Workbench
    await supabase.from('topics').upsert({
      subject_id: row.id,
      name: "Strand 2.2: Painting, Color Wheels and Scales",
      content: interactiveStrand3Content
    }, { onConflict: 'subject_id,name' });
  }

  console.log("🚀 SUCCESS! Interactive Try-It components deployed safely to your database stream.");
}

deployInteractiveW3();