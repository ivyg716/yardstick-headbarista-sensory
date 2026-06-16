(() => {
  const STORE = "yardstick.sensory.module.v1";

  const navItems = [
    ["welcome", "Welcome"],
    ["why", "Why Sensory Matters"],
    ["basics", "Assessment Basics"],
    ["types", "Assessment Types"],
    ["perception", "Perception"],
    ["taste", "Taste & Intensity"],
    ["wheel", "Flavor Wheel"],
    ["bias", "Thresholds & Bias"],
    ["attributes", "Attributes"],
    ["descriptive", "CVA Descriptive"],
    ["affective", "CVA Affective"],
    ["cupping", "Cupping Workflow"],
    ["workshop", "Workshop Prep"],
    ["check", "Knowledge Check"],
    ["completion", "Completion"]
  ];

  const flow = {
    evoke: ["Evoke", "Brewing releases aroma compounds, acidity stimulates taste receptors, and texture creates mouthfeel sensations."],
    measure: ["Measure", "Intensity scales, scores, and descriptive notes make perception structured instead of vague."],
    analyze: ["Analyze", "Look for patterns: extraction changes, repeated defects, roast differences, or agreement across tasters."],
    interpret: ["Interpret", "Turn sensory evidence into meaning: a brew adjustment, a QC flag, a coaching point, or a communication choice."]
  };

  const senses = {
    ortho: {
      title: "Orthonasal olfaction",
      text: "This is smelling through the nose, such as evaluating dry fragrance or the aroma released when the crust breaks.",
      context: "Connect this to smelling dry grounds before brewing and to fragrance or aroma during cupping.",
      diagram: orthonasalDiagram
    },
    retro: {
      title: "Retronasal olfaction",
      text: "This is aroma moving from the mouth toward the nasal cavity while coffee is in the mouth or after it is swallowed or ejected.",
      context: "Connect this to flavor and aftertaste while tasting, especially as aroma compounds travel upward after slurping.",
      diagram: retronasalDiagram
    },
    tastebuds: {
      title: "Gustation",
      text: "Taste receptors respond to basic tastes such as sweet, sour, salty, bitter, and umami across the tongue. The highlighted clusters are examples, not a fixed tongue map.",
      context: "Connect this to acidity, sweetness, bitterness, and basic taste identification in sensory practice.",
      diagram: gustationDiagram
    },
    tactile: {
      title: "Trigeminal and tactile perception",
      text: "The mouth senses body, texture, drying sensation, temperature, and other physical signals that shape mouthfeel.",
      context: "Connect this to mouthfeel, body, dryness, creaminess, and texture in coffee.",
      diagram: tactileDiagram
    }
  };

  const wheelData = {
    floral: ["Floral", ["Black Tea"], ["Jasmine", "Rose", "Chamomile"]],
    fruity: ["Fruity", ["Berry", "Dried Fruit", "Other Fruit", "Citrus Fruit"], ["Blueberry", "Blackberry", "Raspberry", "Raisin", "Prune", "Cherry", "Apple", "Peach", "Pear", "Grapefruit", "Orange", "Lemon", "Lime"]],
    sweet: ["Sweet", ["Brown Sugar", "Vanilla/Vanillin", "Sweet Aromatics"], ["Molasses", "Maple Syrup", "Caramelized", "Honey", "Vanilla"]],
    nutty: ["Nutty/Cocoa", ["Nutty", "Cocoa"], ["Peanuts", "Hazelnut", "Almond", "Chocolate", "Dark Chocolate"]],
    spices: ["Spices", ["Brown Spice", "Pepper", "Pungent"], ["Anise", "Nutmeg", "Cinnamon", "Clove"]],
    roasted: ["Roasted", ["Cereal", "Burnt", "Tobacco"], ["Grain", "Malt", "Acrid", "Ashy", "Smoky", "Pipe Tobacco"]],
    green: ["Green/Vegetative", ["Olive Oil", "Raw", "Green/Vegetative", "Beany"], ["Peapod", "Fresh", "Dark Green", "Vegetative", "Hay-like", "Herb-like"]],
    sour: ["Sour/Fermented", ["Sour", "Alcohol/Fermented"], ["Acetic Acid", "Butyric Acid", "Citric Acid", "Malic Acid", "Winey", "Whiskey", "Fermented", "Overripe"]],
    other: ["Other", ["Papery/Musty", "Chemical"], ["Stale", "Cardboard", "Papery", "Woody", "Moldy/Damp", "Musty/Dusty", "Medicinal", "Petroleum", "Rubber", "Phenolic"]]
  };

  const qualityLabels = {
    1: "Extremely low",
    2: "Very low",
    3: "Moderately low",
    4: "Slightly low",
    5: "Neither high nor low",
    6: "Slightly high",
    7: "Moderately high",
    8: "Very high",
    9: "Extremely high"
  };

  const quiz = [
    { id: "q1", section: "why", type: "choice", prompt: "Why does sensory evaluation matter in cafe operations?", options: ["It helps interpret the guest flavor experience and guide quality decisions.", "It replaces recipe tracking.", "It proves that tasting notes are literal ingredients."], answer: 0, feedback: "Right. Sensory work connects human perception to QC, calibration, coaching, and communication." },
    { id: "q2", section: "basics", type: "choice", prompt: "Which step turns perception into a structured rating such as low, medium, or high?", options: ["Evoke", "Measure", "Interpret"], answer: 1, feedback: "Measure is the structure step." },
    { id: "q3", section: "types", type: "choice", prompt: "A team wants to know whether a grinder adjustment changed espresso flavor. Which test fits best?", options: ["Difference test", "Affective test", "Extrinsic assessment"], answer: 0, feedback: "A difference test asks whether a change can be detected." },
    { id: "q4", section: "types", type: "choice", prompt: "A buyer wants to know which of two coffees is more desirable for their market. Which test is most direct?", options: ["Descriptive", "Affective", "Physical"], answer: 1, feedback: "Affective assessment handles liking, preference, and impression of quality." },
    { id: "q5", section: "perception", type: "choice", prompt: "Flavor is best understood as:", options: ["Only basic taste", "Taste, retronasal aroma, tactile input, and brain integration", "Only smell before brewing"], answer: 1, feedback: "Flavor is multi-sensory." },
    { id: "q6", section: "perception", type: "match", prompt: "Match the pathway to the example.", pairs: [["Smelling dry grounds", "orthonasal"], ["Aroma perceived while coffee is in the mouth", "retronasal"], ["Astringent drying sensation", "tactile"]], choices: { orthonasal: "Orthonasal", retronasal: "Retronasal", tactile: "Tactile" }, feedback: "Good pathway mapping." },
    { id: "q7", section: "taste", type: "choice", prompt: "Which list contains the five basic tastes taught in this module?", options: ["Sweet, sour, salty, bitter, umami", "Floral, fruity, roasted, green, other", "Fragrance, aroma, flavor, aftertaste, overall"], answer: 0, feedback: "Those are the five basic tastes." },
    { id: "q8", section: "taste", type: "choice", prompt: "Intensity describes:", options: ["How desirable a coffee is", "The perceived strength of a stimulus", "The price of a coffee"], answer: 1, feedback: "Intensity is strength, not quality." },
    { id: "q9", section: "bias", type: "choice", prompt: "Detection threshold means:", options: ["The lowest level needed to notice a sensation", "The point where a sample becomes expensive", "The highest score on an affective form"], answer: 0, feedback: "Detection is the first perceivable level." },
    { id: "q10", section: "bias", type: "choice", prompt: "A coffee labeled as rare seems better before tasting. Which bias is most likely?", options: ["Expectation error", "Adaptation", "Terminal threshold"], answer: 0, feedback: "Expectation changes perception." },
    { id: "q11", section: "bias", type: "choice", prompt: "After many bitter samples, bitterness seems less intense. What is happening?", options: ["Adaptation", "Halo effect", "Affective alignment"], answer: 0, feedback: "Adaptation reduces receptor responsiveness for a time." },
    { id: "q12", section: "wheel", type: "choice", prompt: "Blueberry belongs under:", options: ["Fruity > Berry", "Sweet > Brown Sugar", "Roasted > Cereal"], answer: 0, feedback: "Blueberry sits in the berry area of Fruity." },
    { id: "q13", section: "wheel", type: "choice", prompt: "Molasses is closest to which wheel area?", options: ["Sour/Fermented", "Sweet > Brown Sugar", "Green/Vegetative"], answer: 1, feedback: "Molasses belongs with brown sugar descriptors." },
    { id: "q14", section: "descriptive", type: "choice", prompt: "Which note is descriptive rather than affective?", options: ["Elegant", "Citrus fruit", "Disappointing"], answer: 1, feedback: "Citrus fruit names a perceived descriptor." },
    { id: "q15", section: "descriptive", type: "choice", prompt: "The CVA descriptive form mainly records:", options: ["What is present and how intense it is", "Only final score", "Guest preference"], answer: 0, feedback: "Descriptive assessment lists perceived attributes and intensity." },
    { id: "q16", section: "affective", type: "choice", prompt: "The CVA affective form uses the 1-9 scale for:", options: ["Impression of Quality", "Grind size", "Roast color"], answer: 0, feedback: "The 1-9 scale captures impression of quality." },
    { id: "q17", section: "affective", type: "choice", prompt: "Which set matches the listed defect options?", options: ["Moldy, phenolic, potato", "Blueberry, jasmine, lemon", "Sweet, sour, salty"], answer: 0, feedback: "Those are the defect checkboxes." },
    { id: "q18", section: "cupping", type: "order", prompt: "Sort these cupping actions into order.", items: ["Assess fragrance", "Pour water", "Break crust", "Skim"], answer: [1, 2, 3, 4], feedback: "Yes. Fragrance happens before brewing; break and skim follow the crust rest." }
  ];

  const main = document.getElementById("main");
  const nav = document.getElementById("navList");
  let selectedChip = null;
  let state = load();

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORE)) || { completed: [], answers: {}, score: null };
    } catch {
      return { completed: [], answers: {}, score: null };
    }
  }

  function save() {
    localStorage.setItem(STORE, JSON.stringify(state));
  }

  function context(text) {
    return `<div class="context"><img src="assets/coffee-bean-guide.svg" alt="" aria-hidden="true"><div><strong>Coffee Context</strong><p>${text}</p></div></div>`;
  }

  function appBox(text) {
    return `<div class="application"><strong>Head Barista Application</strong><p>${text}</p></div>`;
  }

  function completeButton(id, label = "Mark section complete") {
    return `<button class="complete" data-complete="${id}" type="button">${label}</button>`;
  }

  function options(values) {
    return `<option value="">Choose</option>${values.map(([value, label]) => `<option value="${value}">${label}</option>`).join("")}`;
  }

  function buildSections() {
    main.innerHTML = `
      <section id="welcome" class="section hero" data-section="welcome">
        <div>
          <p class="eyebrow">Self-paced module</p>
          <h1>Build a calmer, sharper tasting practice before the table work begins.</h1>
          <p class="lede">This pre-learning prepares Head Barista candidates for practical sensory work: aroma recognition, basic tastes, intensity, bias control, cupping, and CVA form practice.</p>
          <div class="facts"><div><span>45-60 min</span><small>Estimated time</small></div><div><span>June 24</span><small>Practical workshop</small></div><div><span>July 6</span><small>Exam</small></div></div>
        </div>
        <div class="hero-visual" aria-hidden="true"><img src="assets/sensory-path.svg" alt=""></div>
        <div class="journey"><div><strong>Today</strong><span>Self-paced module</span></div><div><strong>June 24</strong><span>Practical workshop</span></div><div><strong>July 6</strong><span>Exam readiness</span></div></div>
        ${context("This module will not replace tasting. It gives your senses a shared map before you step into the calibration room.")}
        ${completeButton("welcome", "Mark welcome complete")}
      </section>

      <section id="why" class="section" data-section="why">
        <p class="eyebrow">Why it matters</p>
        <h2>Sensory work connects quality, consistency, and service.</h2>
        <p class="lede">Machines can report temperature, time, pressure, extraction, color, and moisture. People still interpret the flavor experience those numbers create.</p>
        <div class="grid three">
          <article class="card"><span class="card-kicker">Farm and green buying</span><h3>Value discovery</h3><p>Sensory assessment helps name the attributes that make a coffee distinctive, useful, or worth paying attention to.</p></article>
          <article class="card"><span class="card-kicker">Roastery and QC</span><h3>Consistency checks</h3><p>Tasting catches roast, water, storage, and defect signals that numbers alone may not explain.</p></article>
          <article class="card"><span class="card-kicker">Cafe operations</span><h3>Service decisions</h3><p>Head Baristas translate sensory observations into coaching, dial-in choices, and customer language.</p></article>
        </div>
        <div class="split"><div class="panel"><h3>What the CVA shift changes</h3><p>CVA separates description from preference. A coffee can be high in citrus acidity as a descriptive observation, while a taster may or may not find that desirable in an affective judgment.</p></div>${appBox("When a barista says a batch brew is \"too sharp,\" ask what is present first: sourness, bitterness, short aftertaste, thin mouthfeel, or something else. Then decide what to adjust.")}</div>
        ${context("Good sensory language makes team calibration less personal. You are discussing what was perceived, not who is right.")}
        ${completeButton("why")}
      </section>

      <section id="basics" class="section" data-section="basics">
        <p class="eyebrow">Sensory assessment basics</p>
        <h2>Evoke, measure, analyze, interpret.</h2>
        <p class="lede">Sensory assessment turns tasting from a loose opinion into structured evidence for coffee decisions.</p>
        <div class="flow" aria-label="Four-step sensory assessment flow">
          <button class="active" data-flow="evoke" type="button"><span>1</span>Evoke</button>
          <button data-flow="measure" type="button"><span>2</span>Measure</button>
          <button data-flow="analyze" type="button"><span>3</span>Analyze</button>
          <button data-flow="interpret" type="button"><span>4</span>Interpret</button>
        </div>
        <div class="panel" id="flowDetail"><h3>Evoke</h3><p>${flow.evoke[1]}</p></div>
        <div class="mini" data-check="flow-match">
          <h3>Mini-checkpoint</h3><p>Match each coffee scenario to the sensory step.</p>
          <label>Noticing that dry grounds smell floral <select data-answer="evoke">${options([["evoke","Evoke"],["measure","Measure"],["analyze","Analyze"],["interpret","Interpret"]])}</select></label>
          <label>Rating acidity as medium-high <select data-answer="measure">${options([["evoke","Evoke"],["measure","Measure"],["analyze","Analyze"],["interpret","Interpret"]])}</select></label>
          <label>Comparing three tasters' notes for a defect pattern <select data-answer="analyze">${options([["evoke","Evoke"],["measure","Measure"],["analyze","Analyze"],["interpret","Interpret"]])}</select></label>
          <label>Deciding an espresso may be under-extracted <select data-answer="interpret">${options([["evoke","Evoke"],["measure","Measure"],["analyze","Analyze"],["interpret","Interpret"]])}</select></label>
          <button class="check" data-check-target="flow-match" type="button">Check answers</button><p class="feedback" data-feedback="flow-match"></p>
        </div>
        ${appBox("Use the four steps when coaching dial-in: identify what is perceived, size the intensity, compare against a target, then decide the next brew move.")}
        ${completeButton("basics")}
      </section>

      <section id="types" class="section" data-section="types">
        <p class="eyebrow">Types of sensory assessment</p>
        <h2>Different tests answer different questions.</h2>
        <div class="grid three">
          <article class="card"><h3>Difference test</h3><p><strong>Question:</strong> Can we detect a difference?</p><p>Use for grinder changes, milk changes, roast shifts, water changes, or suspected defects.</p></article>
          <article class="card"><h3>Affective test</h3><p><strong>Question:</strong> Which do we prefer?</p><p>Use for liking, preference, quality impression, and known-market desirability.</p></article>
          <article class="card"><h3>Descriptive test</h3><p><strong>Question:</strong> What are we perceiving?</p><p>Use to identify, describe, and quantify attributes such as flavor, acidity, and mouthfeel.</p></article>
        </div>
        <div class="sorter" data-sort="assessment-sort"><h3>Sort the scenarios</h3>
          <div class="chip-bank"><button class="sort-chip" draggable="true" data-answer="difference" type="button">Did the grinder adjustment change espresso?</button><button class="sort-chip" draggable="true" data-answer="affective" type="button">Which oat milk makes the cappuccino more enjoyable?</button><button class="sort-chip" draggable="true" data-answer="descriptive" type="button">Describe the acidity, sweetness, and mouthfeel.</button><button class="sort-chip" draggable="true" data-answer="difference" type="button">Can the team detect a defective roast batch?</button><button class="sort-chip" draggable="true" data-answer="affective" type="button">Which filter profile would guests prefer?</button><button class="sort-chip" draggable="true" data-answer="descriptive" type="button">Name the dominant aroma category.</button></div>
          <div class="drop-grid"><div class="drop-zone" tabindex="0" data-accept="difference"><strong>Difference</strong></div><div class="drop-zone" tabindex="0" data-accept="affective"><strong>Affective</strong></div><div class="drop-zone" tabindex="0" data-accept="descriptive"><strong>Descriptive</strong></div></div>
          <button class="check" data-sort-target="assessment-sort" type="button">Check sorting</button><p class="feedback" data-feedback="assessment-sort"></p>
        </div>
        ${context("Do not ask a preference question when the team needs a detection answer. The wrong test creates noisy decisions.")}
        ${completeButton("types")}
      </section>

      <section id="perception" class="section" data-section="perception">
        <p class="eyebrow">How humans perceive coffee</p>
        <h2>Flavor is multi-sensory.</h2>
        <p class="lede">Smell, taste, touch, sight, and even sound shape the coffee experience. In tasting, the big three are olfaction, gustation, and tactile perception.</p>
        <div class="tabs" aria-label="Sensory pathways"><button class="active" data-sense="ortho" type="button">Orthonasal</button><button data-sense="retro" type="button">Retronasal</button><button data-sense="tastebuds" type="button">Gustation</button><button data-sense="tactile" type="button">Tactile</button></div>
        <div class="panel two" id="sensePanel"></div>
        ${appBox("If a barista calls a coffee \"blueberry,\" remember that the coffee is evoking a familiar aroma association. It does not mean blueberry was added.")}
        ${completeButton("perception")}
      </section>

      <section id="taste" class="section" data-section="taste">
        <p class="eyebrow">Basic taste and intensity</p>
        <h2>Name the taste, then size it.</h2>
        <p class="lede">Basic tastes are sweet, sour, salty, bitter, and umami. Intensity describes strength: low, medium, or high. Intensity is not the same as quality.</p>
        <div class="taste-strip"><div><strong>Sweet</strong><span>sugar-like, ripe fruit impression</span></div><div><strong>Sour</strong><span>acidic, citrus-like sharpness</span></div><div><strong>Salty</strong><span>saline, mineral edge</span></div><div><strong>Bitter</strong><span>quinine, cocoa, roast edge</span></div><div><strong>Umami</strong><span>savory, brothy impression</span></div></div>
        <div class="mini" data-check="taste-id"><h3>Practice A: identify basic taste</h3>
          <label>Sample A-014: sugar-water impression <select data-answer="sweet">${options([["sweet","Sweet"],["sour","Sour"],["salty","Salty"],["bitter","Bitter"],["umami","Umami"]])}</select></label>
          <label>Sample B-220: lemon-water impression <select data-answer="sour">${options([["sweet","Sweet"],["sour","Sour"],["salty","Salty"],["bitter","Bitter"],["umami","Umami"]])}</select></label>
          <label>Sample C-631: tonic-water edge <select data-answer="bitter">${options([["sweet","Sweet"],["sour","Sour"],["salty","Salty"],["bitter","Bitter"],["umami","Umami"]])}</select></label>
          <button class="check" data-check-target="taste-id" type="button">Check tastes</button><p class="feedback" data-feedback="taste-id"></p>
        </div>
        <div class="sorter" data-sort="intensity-rank"><h3>Practice B: rank intensity</h3><p>Move the sour sample cards into low, medium, and high.</p>
          <div class="chip-bank"><button class="sort-chip" draggable="true" data-answer="medium" type="button">S-18: clear but balanced</button><button class="sort-chip" draggable="true" data-answer="high" type="button">S-91: sharp and persistent</button><button class="sort-chip" draggable="true" data-answer="low" type="button">S-04: barely tart</button></div>
          <div class="drop-grid"><div class="drop-zone" tabindex="0" data-accept="low"><strong>Low</strong></div><div class="drop-zone" tabindex="0" data-accept="medium"><strong>Medium</strong></div><div class="drop-zone" tabindex="0" data-accept="high"><strong>High</strong></div></div>
          <button class="check" data-sort-target="intensity-rank" type="button">Check ranking</button><p class="feedback" data-feedback="intensity-rank"></p>
        </div>
        <div class="mini" data-mixed="mx42"><h3>Practice C: mixed taste analysis</h3><p>Sample MX-42 contains three tastes. Select each present taste and its intensity.</p>
          <div class="mixed-grid"><label><input type="checkbox" data-taste="sweet"> Sweet <select data-intensity="sweet"><option value="">-</option><option value="1">1 Low</option><option value="2">2 Medium</option><option value="3">3 High</option></select></label><label><input type="checkbox" data-taste="sour"> Sour <select data-intensity="sour"><option value="">-</option><option value="1">1 Low</option><option value="2">2 Medium</option><option value="3">3 High</option></select></label><label><input type="checkbox" data-taste="salty"> Salty <select data-intensity="salty"><option value="">-</option><option value="1">1 Low</option><option value="2">2 Medium</option><option value="3">3 High</option></select></label><label><input type="checkbox" data-taste="bitter"> Bitter <select data-intensity="bitter"><option value="">-</option><option value="1">1 Low</option><option value="2">2 Medium</option><option value="3">3 High</option></select></label><label><input type="checkbox" data-taste="umami"> Umami <select data-intensity="umami"><option value="">-</option><option value="1">1 Low</option><option value="2">2 Medium</option><option value="3">3 High</option></select></label></div>
          <button class="check" data-check-mixed type="button">Check mixed sample</button><p class="feedback" data-feedback="mx42"></p>
        </div>
        ${appBox("Intensity ranking trains the same discipline used in espresso QC: \"more sour than target\" is clearer than \"bad shot.\"")}
        ${completeButton("taste")}
      </section>

      <section id="wheel" class="section" data-section="wheel">
        <p class="eyebrow">Aroma and flavor wheel</p>
        <h2>Move from broad category to useful descriptor.</h2>
        <p class="lede">The wheel structures communication. It does not prove literal ingredients in coffee.</p>
        <div class="wheel-layout"><div class="wheel" aria-label="Flavor wheel categories">${Object.keys(wheelData).map((key, i) => `<button class="${i === 0 ? "active" : ""}" data-wheel="${key}" type="button">${wheelData[key][0]}</button>`).join("")}</div><div class="panel" id="wheelResult"></div></div>
        <div class="mini" data-check="wheel-practice"><h3>Flavor wheel practice</h3>
          <label>Where does blueberry belong? <select data-answer="berry">${options([["berry","Fruity > Berry"],["brown-sugar","Sweet > Brown Sugar"],["cocoa","Nutty/Cocoa > Cocoa"]])}</select></label>
          <label>Where does molasses belong? <select data-answer="brown-sugar">${options([["floral","Floral"],["brown-sugar","Sweet > Brown Sugar"],["roasted","Roasted > Burnt"]])}</select></label>
          <label>Which is closer to lemon? <select data-answer="lime">${options([["lime","Lime"],["chocolate","Chocolate"],["tobacco","Tobacco"]])}</select></label>
          <button class="check" data-check-target="wheel-practice" type="button">Check wheel practice</button><p class="feedback" data-feedback="wheel-practice"></p>
        </div>
        ${context("Start broad, then narrow: Fruity > Berry > Blueberry is easier for a team to align on than jumping straight to a very specific note.")}
        ${completeButton("wheel")}
      </section>

      <section id="bias" class="section" data-section="bias">
        <p class="eyebrow">Thresholds, sensitivity, bias, and error</p>
        <h2>Better tasting also means better conditions.</h2>
        <p class="lede">A low threshold means high sensitivity. Bias and fatigue can shift what people report, even when the coffee has not changed.</p>
        <div class="grid four"><article class="card"><h3>Detection</h3><p>Lowest level needed to notice that something is present.</p></article><article class="card"><h3>Recognition</h3><p>Lowest level needed to identify what the sensation is.</p></article><article class="card"><h3>Difference</h3><p>Smallest intensity change a person can perceive.</p></article><article class="card"><h3>Terminal</h3><p>Level beyond which more stimulus no longer creates a clearer perception.</p></article></div>
        <div class="bias-list">
          ${biasDetail("Halo effect", "One positive trait lifts the total evaluation.", "Beautiful aroma makes body seem better.", "A polished bar setup makes a drink seem higher quality.", "Separate attributes before giving overall feedback.")}
          ${biasDetail("Expectation error", "What you expect changes what you perceive.", "Origin name primes tropical fruit notes.", "A premium menu story affects guest expectation.", "Blind samples when training detection.")}
          ${biasDetail("Suggestion effect", "Another person's comment steers perception.", "One taster says peach and the table follows.", "A lead barista's first comment dominates the shift.", "Ask for silent notes first.")}
          ${biasDetail("Logical error", "An assumption about one trait shapes another rating.", "Dark color is assumed to mean bitter.", "A long shot is assumed thin before tasting.", "Taste before explaining the variable.")}
          ${biasDetail("Convergence effect", "Tasters adjust toward the group.", "Scores cluster after discussion.", "Juniors copy the senior's language.", "Collect independent ratings first.")}
          ${biasDetail("Leniency error", "A taster is consistently too generous or too strict.", "One cupper always scores high.", "Feedback is softened until it loses accuracy.", "Compare notes against references.")}
          ${biasDetail("Association error", "Past experience colors the present sample.", "One defect memory makes similar notes feel worse.", "A bad previous batch affects confidence in a current one.", "Name the present evidence.")}
          ${biasDetail("Adaptation", "Receptors become temporarily less responsive.", "Bitterness feels reduced after many cups.", "Baristas stop noticing strong grinder aromas.", "Build rests and palate resets into sessions.")}
          ${biasDetail("Habituation", "Repeated exposure reduces attention.", "A constant cafe odor disappears from awareness.", "Repeated tasting dulls alertness.", "Rotate tasks during long QC blocks.")}
          ${biasDetail("Order effect", "Sample sequence affects perception.", "A delicate coffee tastes flat after a very intense one.", "Drinks are judged against the previous drink instead of the target.", "Randomize or balance sample order.")}
          ${biasDetail("Stimulus error", "Irrelevant clues influence judgment.", "Cup color or code shape expectations.", "Latte art influences flavor rating.", "Standardize presentation when the test requires it.")}
        </div>
        <div class="mini" data-check="bias-scenarios"><h3>Bias checkpoint</h3>
          <label>The trainer says "this one is floral" before anyone tastes. <select data-answer="suggestion">${options([["suggestion","Suggestion effect"],["adaptation","Adaptation"],["leniency","Leniency error"]])}</select></label>
          <label>A delicate washed coffee follows an intense fermented sample and seems muted. <select data-answer="order">${options([["halo","Halo effect"],["order","Order effect"],["logical","Logical error"]])}</select></label>
          <label>After two hours near the grinder, roast aroma is barely noticed. <select data-answer="habituation">${options([["habituation","Habituation"],["expectation","Expectation error"],["convergence","Convergence effect"]])}</select></label>
          <button class="check" data-check-target="bias-scenarios" type="button">Check bias scenarios</button><p class="feedback" data-feedback="bias-scenarios"></p>
        </div>
        ${completeButton("bias")}
      </section>

      <section id="attributes" class="section" data-section="attributes">
        <p class="eyebrow">Sensory attributes</p>
        <h2>Each attribute leans on a sensory mode.</h2>
        <div class="attribute-grid">
          ${attribute("Fragrance", "Dry grounds before brewing.", "Orthonasal")}
          ${attribute("Aroma", "Brew and crust-break smell.", "Orthonasal")}
          ${attribute("Flavor", "In-mouth taste plus aroma.", "Gustatory + retronasal")}
          ${attribute("Aftertaste", "Perception after ejecting or swallowing.", "Gustatory + retronasal")}
          ${attribute("Acidity", "Sour taste character and intensity.", "Gustatory")}
          ${attribute("Sweetness", "Sweet taste or sweet aroma impression.", "Gustatory / retronasal")}
          ${attribute("Mouthfeel", "Weight, texture, astringency.", "Tactile")}
          ${attribute("Uniformity", "How consistent cups are within a sample.", "Comparison")}
          ${attribute("Defects", "Clearly undesirable sensory faults.", "Quality flag")}
        </div>
        <div class="mini" data-check="attribute-match"><h3>Attribute match</h3>
          <label>Fragrance <select data-answer="orthonasal">${options([["orthonasal","Orthonasal"],["tactile","Tactile"],["gustatory","Gustatory"]])}</select></label>
          <label>Mouthfeel <select data-answer="tactile">${options([["orthonasal","Orthonasal"],["tactile","Tactile"],["retronasal","Retronasal"]])}</select></label>
          <label>Aftertaste <select data-answer="gust-retro">${options([["gust-retro","Gustatory + retronasal"],["visual","Visual"],["comparison","Comparison"]])}</select></label>
          <button class="check" data-check-target="attribute-match" type="button">Check attributes</button><p class="feedback" data-feedback="attribute-match"></p>
        </div>
        ${appBox("Use attribute language when troubleshooting: \"short aftertaste and thin mouthfeel\" points the team more clearly than \"not enough body.\"")}
        ${completeButton("attributes")}
      </section>

      <section id="descriptive" class="section" data-section="descriptive">
        <p class="eyebrow">CVA descriptive form practice</p>
        <h2>Descriptive assessment answers: what is present, and how intense is it?</h2>
        <p class="lede">This simplified form mirrors the CVA idea: intensity scales, CATA descriptors, and notes.</p>
        <div class="form-card" id="descriptiveForm"><p><strong>Practice sample:</strong> Coffee D-17 shows medium-high fragrance, clear blueberry and lemon-like acidity, moderate sweetness, and smooth mouthfeel.</p>
          <div class="slider-grid">${["Fragrance","Aroma","Flavor","Aftertaste","Acidity","Sweetness","Mouthfeel"].map(name => `<label class="form-row">${name} intensity <input type="range" min="0" max="15" value="7" data-slider="${name.toLowerCase()}"><output>7</output><small>Low / Medium / High</small></label>`).join("")}</div>
          <fieldset class="check-cloud"><legend>CATA descriptors</legend>${["Floral","Fruity","Berry","Dried Fruit","Citrus Fruit","Sour/Fermented","Sour","Fermented","Green/Vegetative","Other","Chemical","Musty/Earthy","Woody","Roasted","Cereal","Burnt","Tobacco","Nutty/Cocoa","Nutty","Cocoa","Spice","Sweet","Vanilla/Vanillin","Brown Sugar"].map(v => `<label><input type="checkbox" value="${v}" data-cata> ${v}</label>`).join("")}</fieldset>
          <fieldset class="check-cloud"><legend>Main tastes</legend>${["Sweet","Sour","Salty","Bitter","Umami"].map(v => `<label><input type="checkbox" value="${v}"> ${v}</label>`).join("")}</fieldset>
          <label class="notes-field">Descriptive note <textarea rows="4" placeholder="Example: Berry-like fruit with lemony acidity and smooth mouthfeel."></textarea></label>
          <button class="check" data-check-descriptive type="button">Check practice form</button><p class="feedback" data-feedback="descriptive-form"></p>
        </div>
        ${appBox("Descriptive notes are useful for QC logs, coffee cards, coaching, and communicating profiles without turning them into personal preference statements.")}
        ${completeButton("descriptive")}
      </section>

      <section id="affective" class="section" data-section="affective">
        <p class="eyebrow">CVA affective form practice</p>
        <h2>Affective assessment answers: how desirable is this?</h2>
        <p class="lede">Use the 1-9 impression of quality scale, notes, non-uniform cups, and defect checks.</p>
        <div class="form-card">
          <label class="form-row quality-scale">Impression of Quality <input type="range" min="1" max="9" value="6" data-quality><output>6 - Slightly high</output></label>
          <label class="notes-field">Affective note <textarea rows="3" placeholder="Example: Pleasant citrus brightness; quality impression is high for a filter profile."></textarea></label>
          <fieldset class="cup-checks"><legend>Non-uniform cups</legend>${[1,2,3,4,5].map(n => `<label><input type="checkbox"> Cup ${n}</label>`).join("")}</fieldset>
          <fieldset class="cup-checks"><legend>Defective cups</legend>${[1,2,3,4,5].map(n => `<label><input type="checkbox"> Cup ${n}</label>`).join("")}</fieldset>
          <fieldset class="check-cloud"><legend>Defect type, if any</legend>${["Moldy","Phenolic","Potato"].map(v => `<label><input type="checkbox" value="${v.toLowerCase()}"> ${v}</label>`).join("")}</fieldset>
        </div>
        <div class="sorter" data-sort="affective-sort"><h3>Descriptive vs affective sorting</h3>
          <div class="chip-bank"><button class="sort-chip" draggable="true" data-answer="descriptive" type="button">Blueberry</button><button class="sort-chip" draggable="true" data-answer="affective" type="button">Elegant</button><button class="sort-chip" draggable="true" data-answer="affective" type="button">Too acidic</button><button class="sort-chip" draggable="true" data-answer="descriptive" type="button">Citrus fruit</button><button class="sort-chip" draggable="true" data-answer="descriptive" type="button">Silky mouthfeel</button><button class="sort-chip" draggable="true" data-answer="affective" type="button">Disappointing aftertaste</button></div>
          <div class="drop-grid two"><div class="drop-zone" tabindex="0" data-accept="descriptive"><strong>Descriptive</strong></div><div class="drop-zone" tabindex="0" data-accept="affective"><strong>Affective</strong></div></div>
          <button class="check" data-sort-target="affective-sort" type="button">Check sorting</button><p class="feedback" data-feedback="affective-sort"></p>
        </div>
        ${context("Blueberry is a descriptor. \"Beautiful blueberry\" adds an affective layer. Both can be useful, as long as you know which job each one is doing.")}
        ${completeButton("affective")}
      </section>

      <section id="cupping" class="section" data-section="cupping">
        <p class="eyebrow">Cupping workflow</p>
        <h2>A repeatable method reduces noise.</h2>
        <p class="lede">Standardized cupping lets teams compare coffees under controlled and repeatable conditions.</p>
        <div class="panel"><strong>Protocol anchors:</strong> use clean water around 90-96 C, weigh coffee at 8.25 g per 150 mL vessel capacity, grind bowls separately, and assess as coffee cools.</div>
        <ol class="workflow">
          ${workflowStep(1, "Weigh and grind", "Prepare each cup separately and cover grounds before brewing.")}
          ${workflowStep(2, "Assess fragrance", "Smell dry grounds before water is poured.")}
          ${workflowStep(3, "Pour water", "Fill to the rim and create a consistent crust.")}
          ${workflowStep(4, "Let crust sit", "Keep the crust undisturbed for 3-5 minutes.")}
          ${workflowStep(5, "Break crust", "Stir and assess the aroma released.")}
          ${workflowStep(6, "Skim", "Remove floating grounds, foam, and oils.")}
          ${workflowStep(7, "Liquor", "Slurp from a spoon as coffee cools through several temperatures.")}
          ${workflowStep(8, "Assess attributes", "Evaluate flavor, aftertaste, acidity, sweetness, and mouthfeel.")}
        </ol>
        <div class="sequence" data-sequence="cupping-order"><h3>Mini-checkpoint: order the workflow</h3>
          <div class="chip-bank"><button class="seq-chip" draggable="true" data-order="5" type="button">Break crust and assess aroma</button><button class="seq-chip" draggable="true" data-order="2" type="button">Assess fragrance</button><button class="seq-chip" draggable="true" data-order="7" type="button">Liquor at different temperatures</button><button class="seq-chip" draggable="true" data-order="1" type="button">Weigh and grind</button><button class="seq-chip" draggable="true" data-order="6" type="button">Skim</button><button class="seq-chip" draggable="true" data-order="3" type="button">Pour water</button><button class="seq-chip" draggable="true" data-order="4" type="button">Let crust sit 3-5 minutes</button></div>
          <div class="sequence-slots">${[1,2,3,4,5,6,7].map(n => `<div class="sequence-slot" tabindex="0" data-slot="${n}">${n}</div>`).join("")}</div>
          <button class="check" data-sequence-target="cupping-order" type="button">Check order</button><p class="feedback" data-feedback="cupping-order"></p>
        </div>
        ${appBox("For cafe QC, the value is repeatability: same prep, same order, same language, and fewer hidden variables.")}
        ${completeButton("cupping")}
      </section>

      <section id="workshop" class="section" data-section="workshop">
        <p class="eyebrow">Practical workshop preparation</p>
        <h2>On June 24, the room becomes the teacher.</h2>
        <p class="lede">The practical workshop will turn this map into sensory experience.</p>
        <div class="grid five"><article class="card"><h3>Aroma recognition</h3><p>Use descriptor categories from the wheel.</p></article><article class="card"><h3>Basic taste ID</h3><p>Identify five coded taste samples.</p></article><article class="card"><h3>Intensity ranking</h3><p>Group coded samples low, medium, high.</p></article><article class="card"><h3>Mixed taste analysis</h3><p>Select present tastes and rate 1, 2, or 3.</p></article><article class="card"><h3>Cupping forms</h3><p>Practice descriptive and affective records.</p></article></div>
        <div class="panel"><h3>Practice checklist</h3><p>Use this before the workshop. It is also available as a downloadable text file.</p><ul class="practice-list"><li><label><input type="checkbox"> I can explain difference, affective, and descriptive tests.</label></li><li><label><input type="checkbox"> I can name the five basic tastes.</label></li><li><label><input type="checkbox"> I can rank intensity as low, medium, or high.</label></li><li><label><input type="checkbox"> I can navigate broad flavor-wheel categories.</label></li><li><label><input type="checkbox"> I can separate descriptive notes from affective judgments.</label></li><li><label><input type="checkbox"> I can describe the cupping workflow in order.</label></li></ul><div class="button-row"><button class="print" id="printChecklist" type="button">Print checklist</button><a class="button-link" href="assets/practice-checklist.txt" download>Download checklist</a></div></div>
        ${completeButton("workshop")}
      </section>

      <section id="check" class="section" data-section="check">
        <p class="eyebrow">Final knowledge check</p>
        <h2>Check readiness before June 24.</h2>
        <p class="lede">Answer each question for immediate feedback. Your score saves in this browser.</p>
        <div id="quizContainer" class="quiz-container"></div><div id="quizSummary" class="quiz-summary" aria-live="polite"></div>
        ${completeButton("check")}
      </section>

      <section id="completion" class="section completion" data-section="completion">
        <div class="completion-card"><p class="eyebrow">Completion screen</p><h2>Keep going. The table work will make this real.</h2><p id="completionMessage">Complete the sections and final knowledge check to finish the module.</p><div class="completion-stats"><div><span id="sectionCount">0</span><small>Sections complete</small></div><div><span id="scoreText">Not taken</span><small>Knowledge check</small></div></div><p class="completion-note">Before June 24, review any weak sections and arrive ready to taste quietly, write first, and discuss after.</p></div>
      </section>
    `;
  }

  function biasDetail(title, definition, coffee, cafe, application) {
    return `<details><summary>${title}</summary><p><strong>Definition:</strong> ${definition} <strong>Coffee example:</strong> ${coffee} <strong>Cafe example:</strong> ${cafe} <strong>Head Barista application:</strong> ${application}</p></details>`;
  }

  function attribute(name, text, mode) {
    return `<article class="attribute-card"><h3>${name}</h3><p>${text}</p><span>${mode}</span></article>`;
  }

  function workflowStep(n, title, text) {
    return `<li><span>${n}</span><strong>${title}</strong><p>${text}</p></li>`;
  }

  function label(x, y, text, anchor = "middle") {
    return `<text class="svg-label" x="${x}" y="${y}" text-anchor="${anchor}">${text}</text>`;
  }

  function orthonasalDiagram() {
    return `
      <div class="diagram sense-diagram" aria-label="Orthonasal olfaction diagram">
        <svg class="sense-svg ortho-svg" viewBox="0 0 560 360" role="img" aria-labelledby="orthoTitle">
          <title id="orthoTitle">Odor molecules entering the nasal cavity toward the olfactory bulb</title>
          <path class="head-fill" d="M306 58c75 14 130 78 130 156 0 75-51 137-123 155H168c-35 0-61-27-61-58 0-22 12-42 31-53-5-12-8-25-8-39 0-44 29-82 70-95 20-43 61-73 106-66Z"/>
          <path class="profile-line" d="M314 72c-55 4-98 43-111 95-5 21-18 38-37 47l-42 19 50 13c16 4 27 18 27 34v39h112c57-16 98-67 98-127 0-64-41-111-97-120Z"/>
          <path class="nasal-cavity" d="M139 221c59-19 104-24 135-10 23 11 43 8 66-9"/>
          <path class="air-path path-ortho" d="M78 218C130 196 178 190 226 201c42 10 76 7 111-6"/>
          <circle class="bulb" cx="344" cy="193" r="22"/>
          <path class="bulb-stem" d="M358 183c23-16 43-28 69-29"/>
          <g class="molecules">
            <circle class="molecule molecule-a" cx="94" cy="214" r="7"/>
            <circle class="molecule molecule-b" cx="138" cy="202" r="5"/>
            <circle class="molecule molecule-c" cx="182" cy="199" r="6"/>
            <circle class="molecule molecule-d" cx="228" cy="206" r="4"/>
          </g>
          <path class="leader" d="M128 188 96 154"/>
          <path class="leader" d="M242 217 236 260"/>
          <path class="leader" d="M344 171 388 116"/>
          ${label(94, 146, "Odor molecules")}
          ${label(236, 278, "Nasal cavity")}
          ${label(405, 111, "Olfactory bulb")}
        </svg>
      </div>`;
  }

  function retronasalDiagram() {
    return `
      <div class="diagram sense-diagram" aria-label="Retronasal olfaction diagram">
        <svg class="sense-svg retro-svg" viewBox="0 0 560 360" role="img" aria-labelledby="retroTitle">
          <title id="retroTitle">Aroma compounds moving from the mouth and throat upward to the olfactory bulb</title>
          <path class="head-fill" d="M329 55c74 12 130 76 130 154 0 72-48 133-116 154H174c-34 0-61-26-61-58 0-21 12-41 30-52-5-13-8-27-8-41 0-45 29-83 70-96 19-42 77-69 124-61Z"/>
          <path class="profile-line" d="M333 73c-58 2-105 43-119 97-5 21-19 38-38 47l-42 19 51 12c17 4 29 19 29 36v35h124c58-16 97-66 97-126 0-63-43-111-102-120Z"/>
          <path class="mouth-line" d="M134 237c49-5 86 3 115 24"/>
          <path class="tongue-shape" d="M169 254c31 6 57 15 88 7 17-5 30-1 41 11-32 20-91 22-129-18Z"/>
          <path class="throat" d="M286 252c21 32 23 62 7 91"/>
          <path class="retro-path" d="M274 258c42-36 55-79 37-129"/>
          <path class="nasal-cavity" d="M210 213c54-18 94-18 124-1"/>
          <circle class="bulb" cx="331" cy="176" r="21"/>
          <g class="retro-molecules">
            <circle class="retro-dot r1" cx="272" cy="257" r="6"/>
            <circle class="retro-dot r2" cx="291" cy="229" r="5"/>
            <circle class="retro-dot r3" cx="308" cy="198" r="6"/>
          </g>
          <path class="leader" d="M172 238 118 199"/>
          <path class="leader" d="M291 277 343 318"/>
          <path class="leader" d="M302 211 385 242"/>
          <path class="leader" d="M332 154 394 113"/>
          ${label(109, 194, "Mouth")}
          ${label(354, 334, "Back of throat")}
          ${label(420, 249, "Retronasal pathway")}
          ${label(411, 109, "Olfactory bulb")}
        </svg>
      </div>`;
  }

  function gustationDiagram() {
    const tasteDots = [
      ["sweet", 240, 218], ["sweet", 286, 268], ["sweet", 319, 205],
      ["sour", 208, 173], ["sour", 342, 239], ["sour", 274, 143],
      ["salty", 256, 182], ["salty", 307, 249], ["salty", 217, 250],
      ["bitter", 289, 176], ["bitter", 338, 188], ["bitter", 252, 277],
      ["umami", 225, 212], ["umami", 315, 222], ["umami", 279, 240]
    ].map(([taste, x, y]) => `<circle class="taste-dot ${taste}" cx="${x}" cy="${y}" r="8"/>`).join("");
    return `
      <div class="diagram sense-diagram" aria-label="Gustation diagram">
        <svg class="sense-svg taste-svg" viewBox="0 0 560 360" role="img" aria-labelledby="tasteTitle">
          <title id="tasteTitle">Tongue and distributed taste receptor clusters</title>
          <path class="mouth-arch" d="M129 110c74-54 231-58 303 1"/>
          <path class="tongue-large" d="M178 127c42-24 160-23 204 0 43 23 48 84 23 131-25 49-80 78-126 78s-98-27-125-76c-26-47-20-109 24-133Z"/>
          <path class="tongue-midline" d="M280 130c-20 53-22 120-4 183"/>
          <g class="taste-dots">${tasteDots}</g>
          <g class="taste-buds">
            <circle cx="181" cy="152" r="4"/><circle cx="194" cy="134" r="4"/><circle cx="375" cy="151" r="4"/><circle cx="362" cy="134" r="4"/><circle cx="280" cy="315" r="4"/>
          </g>
          <path class="leader" d="M178 152 106 121"/>
          <path class="leader" d="M221 210 108 220"/>
          <path class="leader" d="M335 239 431 278"/>
          <path class="leader" d="M336 188 441 174"/>
          <path class="leader" d="M278 239 278 84"/>
          <path class="leader" d="M300 314 394 323"/>
          ${label(94, 116, "Taste buds")}
          ${label(93, 224, "Sweet", "end")}
          ${label(451, 178, "Sour", "start")}
          ${label(448, 291, "Salty", "start")}
          ${label(278, 78, "Bitter")}
          ${label(410, 328, "Umami", "start")}
        </svg>
      </div>`;
  }

  function tactileDiagram() {
    return `
      <div class="diagram sense-diagram" aria-label="Tactile and mouthfeel diagram">
        <svg class="sense-svg tactile-svg" viewBox="0 0 560 360" role="img" aria-labelledby="tactileTitle">
          <title id="tactileTitle">Coffee texture interacting with tongue and mouthfeel perception</title>
          <path class="mouth-arch" d="M108 126c96-69 258-67 354 0"/>
          <path class="lower-mouth" d="M126 274c80 53 248 53 330 0"/>
          <path class="tongue-wide" d="M162 234c48-42 190-46 250-2 31 23 11 64-49 78-58 13-149 12-198-12-38-18-35-42-3-64Z"/>
          <path class="body-wave wave-a" d="M129 187c49-28 92-28 139 0s92 28 143 0"/>
          <path class="body-wave wave-b" d="M143 210c42-18 83-18 125 0s87 18 132 0"/>
          <g class="texture-grain">
            <circle cx="229" cy="242" r="5"/><circle cx="260" cy="229" r="4"/><circle cx="292" cy="247" r="5"/><circle cx="329" cy="231" r="4"/><circle cx="361" cy="251" r="5"/>
          </g>
          <g class="dry-lines">
            <path d="M393 242l30-18"/><path d="M398 261l37-2"/><path d="M390 280l28 20"/>
          </g>
          <g class="temperature">
            <path d="M176 171c-13-20-13-38 0-55"/>
            <path d="M205 169c-13-20-13-38 0-55"/>
          </g>
          <path class="leader" d="M190 187 107 159"/>
          <path class="leader" d="M266 234 214 316"/>
          <path class="leader" d="M414 260 459 308"/>
          <path class="leader" d="M190 131 241 79"/>
          ${label(94, 155, "Body", "end")}
          ${label(206, 332, "Texture")}
          ${label(469, 323, "Astringency / drying", "start")}
          ${label(248, 74, "Temperature / trigeminal")}
        </svg>
      </div>`;
  }

  function renderSense(key = "ortho") {
    const sense = senses[key];
    document.getElementById("sensePanel").innerHTML = `${sense.diagram()}<div><h3>${sense.title}</h3><p>${sense.text}</p>${context(sense.context)}</div>`;
  }

  function renderWheel(key = "floral") {
    const [title, sub, descriptors] = wheelData[key];
    document.getElementById("wheelResult").innerHTML = `<p class="eyebrow">${title}</p><h3>Subcategories</h3><div class="pills">${sub.map(v => `<span>${v}</span>`).join("")}</div><h3>Example descriptors</h3><div class="pills">${descriptors.map(v => `<span>${v}</span>`).join("")}</div>`;
  }

  function initNav() {
    nav.innerHTML = navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join("");
  }

  function updateProgress() {
    const sections = navItems.filter(([id]) => id !== "completion").map(([id]) => id);
    const complete = new Set(state.completed || []);
    const count = sections.filter(id => complete.has(id)).length;
    const pct = Math.round((count / sections.length) * 100);
    document.getElementById("progressText").textContent = `${pct}% complete`;
    document.getElementById("progressBar").style.width = `${pct}%`;
    document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("done", complete.has(a.dataset.nav)));
    document.querySelectorAll("[data-complete]").forEach(btn => {
      const done = complete.has(btn.dataset.complete);
      btn.classList.toggle("done", done);
      btn.textContent = done ? "Section complete" : "Mark section complete";
    });
    document.getElementById("sectionCount").textContent = `${count}/${sections.length}`;
    document.getElementById("scoreText").textContent = state.score === null ? "Not taken" : `${state.score}/${quiz.length}`;
    document.getElementById("completionMessage").textContent = count === sections.length && state.score !== null ? "Module complete. Bring your notes, quiet focus, and calibration mindset to the workshop." : "Complete the sections and final knowledge check to finish the module.";
  }

  function setFeedback(key, good, text) {
    const el = document.querySelector(`[data-feedback="${key}"]`);
    if (!el) return;
    el.textContent = text;
    el.classList.toggle("good", good);
    el.classList.toggle("bad", !good);
  }

  function initInteractions() {
    document.querySelectorAll("[data-complete]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.completed = Array.from(new Set([...(state.completed || []), btn.dataset.complete]));
        save();
        updateProgress();
      });
    });

    document.getElementById("resetProgress").addEventListener("click", () => {
      if (!confirm("Reset saved progress and quiz score for this browser?")) return;
      state = { completed: [], answers: {}, score: null };
      save();
      renderQuiz();
      updateProgress();
    });

    document.querySelectorAll("[data-flow]").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll("[data-flow]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const [title, text] = flow[btn.dataset.flow];
      document.getElementById("flowDetail").innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    }));

    renderSense();
    document.querySelectorAll("[data-sense]").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll("[data-sense]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSense(btn.dataset.sense);
    }));

    renderWheel();
    document.querySelectorAll("[data-wheel]").forEach(btn => btn.addEventListener("click", () => {
      document.querySelectorAll("[data-wheel]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderWheel(btn.dataset.wheel);
    }));

    document.querySelectorAll("[data-check-target]").forEach(btn => btn.addEventListener("click", () => {
      const box = document.querySelector(`[data-check="${btn.dataset.checkTarget}"]`);
      const selects = [...box.querySelectorAll("select[data-answer]")];
      const complete = selects.every(sel => sel.value);
      const good = complete && selects.every(sel => sel.value === sel.dataset.answer);
      setFeedback(btn.dataset.checkTarget, good, good ? "Correct. Keep that distinction." : complete ? "Close. Recheck the role each item plays." : "Choose an answer for each item first.");
    }));

    initDrag();
    initForms();
    renderQuiz();
    document.getElementById("printChecklist").addEventListener("click", () => window.print());
  }

  function initDrag() {
    document.addEventListener("dragstart", event => {
      const chip = event.target.closest(".sort-chip, .seq-chip");
      if (!chip) return;
      selectedChip = chip;
      event.dataTransfer.setData("text/plain", chip.textContent.trim());
    });

    document.addEventListener("dragover", event => {
      const zone = event.target.closest(".drop-zone, .sequence-slot, .chip-bank");
      if (!zone) return;
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    document.addEventListener("dragleave", event => {
      const zone = event.target.closest(".drop-zone, .sequence-slot, .chip-bank");
      if (zone) zone.classList.remove("drag-over");
    });

    document.addEventListener("drop", event => {
      const zone = event.target.closest(".drop-zone, .sequence-slot, .chip-bank");
      if (!zone || !selectedChip) return;
      event.preventDefault();
      zone.classList.remove("drag-over");
      moveChip(zone);
    });

    document.addEventListener("click", event => {
      const chip = event.target.closest(".sort-chip, .seq-chip");
      if (chip) {
        if (selectedChip) selectedChip.classList.remove("selected");
        selectedChip = chip;
        selectedChip.classList.add("selected");
        return;
      }
      const zone = event.target.closest(".drop-zone, .sequence-slot, .chip-bank");
      if (zone && selectedChip) moveChip(zone);
    });

    document.querySelectorAll("[data-sort-target]").forEach(btn => btn.addEventListener("click", () => {
      const activity = document.querySelector(`[data-sort="${btn.dataset.sortTarget}"]`);
      const chips = [...activity.querySelectorAll(".sort-chip")];
      const placed = chips.every(chip => chip.parentElement.classList.contains("drop-zone"));
      const good = placed && chips.every(chip => chip.parentElement.dataset.accept === chip.dataset.answer);
      setFeedback(btn.dataset.sortTarget, good, good ? "Sorted correctly." : placed ? "A few cards are in the wrong column." : "Place every card before checking.");
    }));

    document.querySelectorAll("[data-sequence-target]").forEach(btn => btn.addEventListener("click", () => {
      const activity = document.querySelector(`[data-sequence="${btn.dataset.sequenceTarget}"]`);
      const slots = [...activity.querySelectorAll(".sequence-slot")];
      const filled = slots.every(slot => slot.querySelector(".seq-chip"));
      const good = filled && slots.every(slot => slot.querySelector(".seq-chip").dataset.order === slot.dataset.slot);
      setFeedback(btn.dataset.sequenceTarget, good, good ? "Correct order." : filled ? "The sequence is close, but not quite." : "Fill each numbered slot before checking.");
    }));
  }

  function moveChip(zone) {
    if (zone.classList.contains("sequence-slot")) {
      const existing = zone.querySelector(".seq-chip");
      if (existing) selectedChip.parentElement.appendChild(existing);
    }
    zone.appendChild(selectedChip);
    selectedChip.classList.remove("selected");
    selectedChip = null;
  }

  function initForms() {
    document.querySelectorAll("[data-slider]").forEach(slider => {
      slider.addEventListener("input", () => {
        slider.parentElement.querySelector("output").textContent = slider.value;
      });
    });

    const quality = document.querySelector("[data-quality]");
    quality.addEventListener("input", () => {
      quality.parentElement.querySelector("output").textContent = `${quality.value} - ${qualityLabels[quality.value]}`;
    });

    document.querySelector("[data-check-descriptive]").addEventListener("click", () => {
      const form = document.getElementById("descriptiveForm");
      const checked = [...form.querySelectorAll("[data-cata]:checked")].map(input => input.value);
      const flavor = Number(form.querySelector("[data-slider='flavor']").value);
      const acidity = Number(form.querySelector("[data-slider='acidity']").value);
      const note = form.querySelector("textarea").value.toLowerCase();
      const descriptorsGood = ["Fruity", "Berry", "Citrus Fruit"].every(v => checked.includes(v));
      const slidersGood = flavor >= 8 && acidity >= 8;
      const noteGood = ["blue", "berry", "citrus", "lemon"].some(word => note.includes(word));
      setFeedback("descriptive-form", descriptorsGood && slidersGood && noteGood, descriptorsGood && slidersGood && noteGood ? "Strong descriptive record: descriptors, intensity, and note all point to the sample." : "Add the key fruity, berry, and citrus cues, then make sure intensity and note match the sample.");
    });

    document.querySelector("[data-check-mixed]").addEventListener("click", () => {
      const box = document.querySelector("[data-mixed='mx42']");
      const expected = { sweet: "2", sour: "3", salty: "1" };
      const tastes = ["sweet", "sour", "salty", "bitter", "umami"];
      const good = tastes.every(taste => {
        const checked = box.querySelector(`[data-taste="${taste}"]`).checked;
        const value = box.querySelector(`[data-intensity="${taste}"]`).value;
        return expected[taste] ? checked && value === expected[taste] : !checked;
      });
      setFeedback("mx42", good, good ? "Correct: sweet medium, sour high, salty low." : "Try again. The sample has three present tastes with different intensities.");
    });
  }

  function renderQuiz() {
    const container = document.getElementById("quizContainer");
    container.innerHTML = "";
    quiz.forEach((q, index) => {
      const card = document.createElement("article");
      card.className = "quiz-card";
      card.dataset.quizId = q.id;
      card.innerHTML = `<p class="eyebrow">Question ${index + 1}</p><h3>${q.prompt}</h3><div class="quiz-body"></div><p class="feedback" data-quiz-feedback="${q.id}"></p>`;
      const body = card.querySelector(".quiz-body");
      if (q.type === "choice") renderChoice(q, body);
      if (q.type === "match") renderMatch(q, body);
      if (q.type === "order") renderOrder(q, body);
      container.appendChild(card);
      restoreQuiz(q);
    });
    updateQuizSummary();
  }

  function renderChoice(q, body) {
    const wrap = document.createElement("div");
    wrap.className = "quiz-options";
    q.options.forEach((option, i) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option";
      btn.type = "button";
      btn.textContent = option;
      btn.addEventListener("click", () => {
        state.answers[q.id] = i;
        save();
        restoreQuiz(q);
        updateQuizSummary();
      });
      wrap.appendChild(btn);
    });
    body.appendChild(wrap);
  }

  function renderMatch(q, body) {
    q.pairs.forEach(([label], i) => {
      const row = document.createElement("label");
      row.className = "quiz-match";
      row.textContent = label;
      const select = document.createElement("select");
      select.dataset.pair = String(i);
      select.innerHTML = `<option value="">Choose</option>${Object.entries(q.choices).map(([value, text]) => `<option value="${value}">${text}</option>`).join("")}`;
      select.addEventListener("change", () => {
        const answer = state.answers[q.id] || {};
        answer[i] = select.value;
        state.answers[q.id] = answer;
        save();
        restoreQuiz(q);
        updateQuizSummary();
      });
      row.appendChild(select);
      body.appendChild(row);
    });
  }

  function renderOrder(q, body) {
    q.items.forEach((item, i) => {
      const row = document.createElement("label");
      row.className = "quiz-order";
      row.textContent = item;
      const select = document.createElement("select");
      select.dataset.orderItem = String(i);
      select.innerHTML = `<option value="">Order</option>${q.items.map((_, n) => `<option value="${n + 1}">${n + 1}</option>`).join("")}`;
      select.addEventListener("change", () => {
        const answer = state.answers[q.id] || {};
        answer[i] = Number(select.value);
        state.answers[q.id] = answer;
        save();
        restoreQuiz(q);
        updateQuizSummary();
      });
      row.appendChild(select);
      body.appendChild(row);
    });
  }

  function answered(q) {
    const a = state.answers[q.id];
    if (a === undefined || a === null) return false;
    if (q.type === "choice") return true;
    if (q.type === "match") return q.pairs.every((_, i) => a[i]);
    if (q.type === "order") return q.items.every((_, i) => a[i]);
    return false;
  }

  function correct(q) {
    const a = state.answers[q.id];
    if (!answered(q)) return false;
    if (q.type === "choice") return a === q.answer;
    if (q.type === "match") return q.pairs.every((pair, i) => a[i] === pair[1]);
    if (q.type === "order") return q.answer.every((value, i) => a[i] === value);
    return false;
  }

  function restoreQuiz(q) {
    const card = document.querySelector(`[data-quiz-id="${q.id}"]`);
    if (!card) return;
    const a = state.answers[q.id];
    if (q.type === "choice") {
      card.querySelectorAll(".quiz-option").forEach((btn, i) => {
        btn.classList.toggle("selected", a === i);
        btn.classList.toggle("correct", a !== undefined && i === q.answer);
        btn.classList.toggle("incorrect", a === i && a !== q.answer);
      });
    }
    if (q.type === "match" && a) card.querySelectorAll("[data-pair]").forEach(sel => { sel.value = a[sel.dataset.pair] || ""; });
    if (q.type === "order" && a) card.querySelectorAll("[data-order-item]").forEach(sel => { sel.value = a[sel.dataset.orderItem] || ""; });
    const fb = card.querySelector(`[data-quiz-feedback="${q.id}"]`);
    if (answered(q)) {
      const good = correct(q);
      fb.textContent = good ? q.feedback : "Not quite. Review the related section and try again.";
      fb.classList.toggle("good", good);
      fb.classList.toggle("bad", !good);
    }
  }

  function updateQuizSummary() {
    const done = quiz.filter(answered).length;
    const score = quiz.filter(correct).length;
    const summary = document.getElementById("quizSummary");
    if (done < quiz.length) {
      summary.innerHTML = `<strong>${done}/${quiz.length} answered.</strong> Complete all questions to see your score.`;
      updateProgress();
      return;
    }
    state.score = score;
    save();
    const weak = [...new Set(quiz.filter(q => !correct(q)).map(q => labelFor(q.section)))];
    summary.innerHTML = `<strong>Score: ${score}/${quiz.length}</strong><p>${score >= 15 ? "Ready for practical training. Keep your notes handy." : "Review the weak sections before June 24."}</p>${weak.length ? `<p><strong>Review:</strong> ${weak.join(", ")}</p>` : "<p>No weak sections flagged.</p>"}`;
    updateProgress();
  }

  function labelFor(id) {
    const item = navItems.find(([key]) => key === id);
    return item ? item[1] : id;
  }

  function initScrollSpy() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll("[data-nav]").forEach(link => link.classList.toggle("active", link.dataset.nav === entry.target.dataset.section));
      });
    }, { rootMargin: "-25% 0px -65% 0px", threshold: 0.01 });
    document.querySelectorAll(".section[data-section]").forEach(sec => observer.observe(sec));
  }

  function init() {
    initNav();
    buildSections();
    initInteractions();
    initScrollSpy();
    updateProgress();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
