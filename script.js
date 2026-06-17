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
      title: "Orthonasal Perception",
      definition: "Orthonasal olfaction occurs when odor compounds enter through the nose and reach the olfactory system before tasting.",
      pathway: "Nose -> Nasal Cavity -> Olfactory Epithelium -> Olfactory Bulb -> Brain -> Response",
      green: ["Assessing green coffee aroma", "Detecting defects", "Evaluating freshness"],
      roasted: ["Smelling dry grounds", "Fragrance assessment", "Aroma evaluation during crust breaking"],
      application: "Understanding orthonasal perception helps support aroma evaluation during cupping and quality control."
    },
    retro: {
      title: "Retronasal Perception",
      definition: "Retronasal olfaction occurs when volatile compounds travel from the mouth to the olfactory system during tasting.",
      pathway: "Mouth -> Back of Throat -> Nasal Cavity -> Olfactory Bulb -> Brain -> Response",
      green: ["Not commonly used in green coffee assessment."],
      roasted: ["Flavor perception", "Aftertaste", "Coffee complexity", "Flavor development"],
      application: "Retronasal perception explains why flavor is more than basic taste alone."
    },
    tastebuds: {
      title: "Gustatory Perception",
      definition: "Gustation refers to the perception of the five basic tastes through taste receptors.",
      pathway: "Taste Receptors -> Cranial Nerves -> Brain -> Response",
      tastes: ["Sweet", "Sour", "Salty", "Bitter", "Umami"],
      green: ["Sucrose", "Organic acids", "Amino acids", "Caffeine precursors"],
      roasted: ["Sweetness", "Acidity", "Bitterness", "Flavor balance"],
      application: "Understanding taste helps improve coffee evaluation and calibration discussions."
    },
    tactile: {
      title: "Tactile Perception",
      definition: "Tactile perception refers to physical sensations experienced in the mouth rather than taste or aroma.",
      pathway: "Mouthfeel Signals -> Tactile / Trigeminal Input -> Brain -> Response",
      examples: ["Body", "Texture", "Weight", "Viscosity", "Drying sensation", "Astringency", "Temperature"],
      green: ["Limited direct relevance."],
      roasted: ["Mouthfeel", "Body", "Texture", "Aftertaste quality"],
      application: "Tactile perception supports discussions about body, mouthfeel, and overall drinking experience."
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
        <div class="tabs" aria-label="Sensory pathways"><button class="active" data-sense="ortho" type="button">Orthonasal</button><button data-sense="retro" type="button">Retronasal</button><button data-sense="tastebuds" type="button">Gustatory (Basic Tastes)</button><button data-sense="tactile" type="button">Tactile (Coffee Context)</button></div>
        <div class="panel sense-info-panel" id="sensePanel"></div>
        ${completeButton("perception")}
      </section>

      <section id="taste" class="section" data-section="taste">
        <p class="eyebrow">Basic taste and intensity</p>
        <h2>Name the taste, then size it.</h2>
        <p class="lede">Basic tastes are sweet, sour, salty, bitter, and umami. Intensity describes strength: low, medium, or high. Intensity is not the same as quality.</p>
        <div class="taste-card-grid">
          ${tasteInfoCard("Sweet", "sugar-like, ripe fruit impression", "Sucrose is present in green coffee and helps set up later sweetness impressions.", "Maillard reaction products and caramelization products can suggest sweetness even when brewed coffee has little sugar.", "Honey, brown sugar, caramel.", "Use sweet impressions to coach balance: sweetness can soften perceived acidity and bitterness.")}
          ${tasteInfoCard("Sour / Acidity", "bright, citric, malic, or tart edge", "Organic acids such as citric, malic, and tartaric acids contribute to acidity potential.", "Roasting changes acid balance; acidity can read as lively, structured, or harsh depending on roast and extraction.", "Citrus, apple-like, grape-like, winey, tart.", "Separate pleasant acidity from unpleasant sourness when troubleshooting espresso and filter brews.")}
          ${tasteInfoCard("Salty", "saline or mineral edge", "Trace minerals may contribute small saline impressions, but saltiness is usually subtle.", "Water chemistry and mineral balance can influence whether coffee tastes rounded, flat, sharp, or occasionally saline.", "Mineral, saline, brackish, broth-like.", "Salty taste is uncommon in specialty coffee; if it appears, check water, recipe, and equipment cleanliness.")}
          ${tasteInfoCard("Bitter", "cocoa-like, roast-like, or sharp bitterness", "Caffeine and chlorogenic acids contribute bitterness potential before roasting.", "Roast development and extraction can increase bitter impressions, from pleasant cocoa to harsh roast bitterness.", "Dark chocolate, cocoa, cacao nib, roasted, tonic-like.", "Use bitterness language carefully: dark chocolate bitterness can be desirable, while harsh bitterness may point to over-extraction or roast issues.")}
          ${tasteInfoCard("Umami", "savory, brothy, or tomato-like depth", "Amino acids in green coffee can contribute to savory potential.", "Roasting-derived savory compounds may create subtle umami-like impressions in some coffees.", "Savory, brothy, tomato-like, stock-like.", "Umami is less common but useful to name when a coffee feels savory rather than simply sweet, acidic, or bitter.")}
        </div>
        ${appBox("Taste vocabulary prepares learners for practical training without replacing it. The in-person session is where coded samples, intensity ranking, and mixed-taste analysis should happen.")}
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
        <p class="eyebrow">CVA descriptive form overview</p>
        <h2>Understanding the CVA Descriptive Form</h2>
        <p class="lede">The Descriptive Form is used to document sensory observations and intensity. Use this overview to recognize what the form captures before instructor-led form practice.</p>
        ${descriptiveFormOverview()}
        ${completeButton("descriptive")}
      </section>

      <section id="affective" class="section" data-section="affective">
        <p class="eyebrow">CVA affective form overview</p>
        <h2>Understanding the CVA Affective Form</h2>
        <p class="lede">The Affective Form captures perceived quality and preference. Use this overview to understand the structure of the form before practical sensory training.</p>
        ${affectiveFormOverview()}
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

  function tasteInfoCard(name, summary, green, roasted, descriptors, application) {
    const causes = {
      "Sweet": "Sucrose in green coffee, Maillard reaction products, and caramelization products all shape sweetness perception.",
      "Sour / Acidity": "Organic acids, especially citric, malic, and tartaric acids, shape acidity. Acidity is not the same as unpleasant sourness.",
      "Salty": "Trace minerals and water chemistry can create saline impressions, though salty taste is uncommon in specialty coffee.",
      "Bitter": "Caffeine, chlorogenic acids, roast development, and extraction can all shape bitterness.",
      "Umami": "Amino acids and roasting-derived savory compounds can contribute subtle umami-like depth."
    };
    return `<details class="taste-info-card" open><summary><strong>${name}</strong><span>${summary}</span></summary><div class="taste-info-body"><div><b>What causes this taste in coffee</b><p>${causes[name]}</p></div><div><b>Green coffee context</b><p>${green}</p></div><div><b>Roasted coffee context</b><p>${roasted}</p></div><div><b>Common descriptors</b><p>${descriptors}</p></div><div><b>Head Barista application</b><p>${application}</p></div></div></details>`;
  }

  function staticScale(max, className = "") {
    return `<div class="static-scale ${className}" aria-label="Scale 1 to ${max}">${Array.from({ length: max }, (_, i) => `<span>${i + 1}</span>`).join("")}</div>`;
  }

  function descriptiveAttribute(name, explanation) {
    return `<article class="form-reference-row"><div><h4>${name}</h4><p>${explanation}</p></div>${staticScale(15, "scale-15")}</article>`;
  }

  function notesPreview(title, explanation, sample) {
    return `<article class="form-reference-notes"><h3>${title}</h3><p>${explanation}</p><div class="notes-preview" aria-label="${title} sample notes">${sample}</div></article>`;
  }

  function keyLearning(text) {
    return `<div class="key-learning"><strong>Key Learning Point</strong><p>${text}</p></div>`;
  }

  function descriptiveFormOverview() {
    const attributes = [
      ["Fragrance", "Assessment of aromatic compounds perceived before adding water."],
      ["Aroma", "Assessment of aromatic compounds released after water is added and during crust breaking."],
      ["Flavor", "Assessment of combined taste and aroma perception while tasting."],
      ["Aftertaste", "Assessment of sensations that remain after tasting."],
      ["Acidity", "Assessment of perceived brightness and organic acid expression."],
      ["Sweetness", "Assessment of perceived sweetness intensity."],
      ["Mouthfeel", "Assessment of body, texture, weight, and tactile sensation."]
    ];
    const cata = ["Floral", "Fruity", "Sweet", "Nutty / Cocoa", "Spice", "Roasted", "Green / Vegetative", "Sour / Fermented", "Other"];
    return `<div class="form-reference">
      <article class="form-reference-card">
        <div class="form-reference-header"><span>Descriptive Form</span><strong>Purpose</strong><p>The Descriptive Form is used to document sensory observations and intensity.</p></div>
        <section class="form-reference-section"><h3>Intensity Attributes</h3><p>Each attribute is evaluated on a 1-15 intensity scale so tasters can describe what is present and how strong it seems.</p><div class="form-reference-rows">${attributes.map(([name, explanation]) => descriptiveAttribute(name, explanation)).join("")}</div></section>
        <section class="form-reference-section"><h3>CATA (Check All That Apply)</h3><p>CATA descriptors help capture what sensory characteristics are present in the coffee.</p><div class="reference-pill-grid">${cata.map(item => `<span>${item}</span>`).join("")}</div></section>
        ${notesPreview("Notes Section", "This section is used to capture descriptive observations and sensory impressions.", "Example: Citrus fruit, medium-high acidity, moderate sweetness, smooth mouthfeel.")}
        ${keyLearning("The Descriptive Form answers: \"What is present in the coffee?\" and \"How intense is it?\"")}
      </article>
    </div>`;
  }

  function affectiveFormOverview() {
    const qualityLabels = ["1 = Extremely Low", "5 = Neutral", "9 = Extremely High"];
    const qualityNotes = [
      ["Preference Assessment", "The Affective Form allows evaluators to communicate how desirable or enjoyable they find the coffee."],
      ["Uniformity", "Uniformity records whether cups from the same sample present consistently. Non-uniform cups can lower confidence in quality."],
      ["Moldy", "A moldy defect indicates a serious negative quality cue and should be documented clearly."],
      ["Phenolic", "Phenolic notes can suggest medicinal, chemical, or smoky defect character that affects quality perception."],
      ["Potato", "Potato defect notes are marked when a potato-like aroma or flavor is detected."]
    ];
    return `<div class="form-reference">
      <article class="form-reference-card">
        <div class="form-reference-header affective"><span>Affective Form</span><strong>Purpose</strong><p>The Affective Form captures perceived quality and preference.</p></div>
        <section class="form-reference-section"><h3>Impression of Quality Scale</h3><p>This 1-9 scale captures the evaluator's perception of quality.</p>${staticScale(9, "scale-9")}<div class="scale-labels">${qualityLabels.map(label => `<span>${label}</span>`).join("")}</div></section>
        <section class="form-reference-section"><h3>Preference and Quality Observations</h3><div class="form-info-grid">${qualityNotes.map(([title, text]) => `<article><h4>${title}</h4><p>${text}</p></article>`).join("")}</div></section>
        ${notesPreview("Notes Section", "This section captures observations supporting the evaluator's quality judgment.", "Example: High quality impression; bright citrus balance, clean finish, pleasant sweetness.")}
        ${keyLearning("The Affective Form answers: \"How desirable is the coffee?\" while the Descriptive Form answers: \"What is present in the coffee?\"")}
      </article>
    </div>`;
  }

  function simpleList(items) {
    return `<ul>${items.map(item => `<li>${item}</li>`).join("")}</ul>`;
  }

  function senseInfoBox(title, body, modifier = "") {
    return `<article class="sense-info-box ${modifier}"><h4>${title}</h4>${body}</article>`;
  }

  function renderSense(key = "ortho") {
    const sense = senses[key];
    const extra = sense.tastes
      ? senseInfoBox("Basic Tastes", simpleList(sense.tastes), "compact")
      : sense.examples
        ? senseInfoBox("Examples", simpleList(sense.examples), "compact")
        : "";
    document.getElementById("sensePanel").innerHTML = `
      <article class="sense-info-card">
        <h3>${sense.title}</h3>
        <div class="sense-info-grid">
          ${senseInfoBox("Definition", `<p>${sense.definition}</p>`)}
          ${senseInfoBox("Sensory Pathway", `<p class="pathway-text">${sense.pathway}</p>`)}
          ${extra}
          ${senseInfoBox("Coffee Context", `<div class="coffee-context-grid"><div><b>Green Coffee Context</b>${simpleList(sense.green)}</div><div><b>Roasted Coffee Context</b>${simpleList(sense.roasted)}</div></div>`, "wide")}
          ${senseInfoBox("Head Barista Application", `<p>${sense.application}</p>`, "application wide")}
        </div>
      </article>`;
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
    const mixedCheck = document.querySelector("[data-check-mixed]");
    if (!mixedCheck) return;

    mixedCheck.addEventListener("click", () => {
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
