
function calcFasting() {
  const hrs = parseFloat(document.getElementById('hoursElapsed').value) || 18;
  const diet = document.getElementById('preFastDiet').value;
  const activity = document.getElementById('fastActivity').value;

  // Modifiers: Low carb and exercise advance fasting clock by 2 to 6 equivalent hours
  let effectiveHrs = hrs;
  if (diet === 'lowcarb') effectiveHrs += 4;
  if (activity === 'active') effectiveHrs += 2;
  if (activity === 'intense') effectiveHrs += 4;

  let stage = "Fed State / Digestion";
  let ketones = "0.1 – 0.2 mmol/L (Baseline)";
  let glycogen = "Full (100–120g in liver)";
  let substrate = "Circulating Blood Glucose & Dietary Chylomicrons";
  let autophagy = "Suppressed by Insulin & mTOR";

  if (effectiveHrs >= 48) {
    stage = "Deep Autophagy & Prolonged Ketosis";
    ketones = "2.5 – 5.0 mmol/L";
    glycogen = "Exhausted (Hepatic gluconeogenesis)";
    substrate = "Ketone Bodies & Free Fatty Acids";
    autophagy = "Peak Up-regulation (AMPK active)";
  } else if (effectiveHrs >= 24) {
    stage = "Full Ketosis & Cellular Recycling";
    ketones = "1.5 – 3.0 mmol/L";
    glycogen = "Virtually Depleted";
    substrate = "Adipose Free Fatty Acids & BHB";
    autophagy = "Robust Activation";
  } else if (effectiveHrs >= 16) {
    stage = "Early Ketosis & Mild Autophagy";
    ketones = "0.5 – 1.5 mmol/L (Nutritional Ketosis)";
    glycogen = "Depleted (>80%)";
    substrate = "Fatty Acid Beta-Oxidation";
    autophagy = "Initiation Phase";
  } else if (effectiveHrs >= 12) {
    stage = "Post-Absorptive / Glycogen Depletion";
    ketones = "0.2 – 0.5 mmol/L";
    glycogen = "Partially Depleted (~50%)";
    substrate = "Hepatic Glycogenolysis";
    autophagy = "Baseline / Minimal";
  }

  document.getElementById('resMetabolicStage').textContent = stage;
  document.getElementById('resKetones').textContent = ketones;
  document.getElementById('resGlycogen').textContent = glycogen;
  document.getElementById('resSubstrate').textContent = substrate;
  document.getElementById('resAutophagy').textContent = autophagy;
}

document.querySelectorAll('input, select').forEach(el => {
  el.addEventListener('input', calcFasting);
  el.addEventListener('change', calcFasting);
});
window.addEventListener('DOMContentLoaded', calcFasting);
        