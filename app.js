const MEMBERS_URL="https://claude.ai/artifact/LgSZe4UDTRhBn8YiXDC1XZ";
/* ============================== STATIC CONTENT ============================== */
const QC_OPTS=["Quantity A is greater.","Quantity B is greater.","The two quantities are equal.","The relationship cannot be determined from the information given."];
const QUESTIONS=[
{id:"q1",s:"quant",t:"Arithmetic",k:"qc",d:1,p:"<i>x</i> is a positive integer.",a:"(−1)<sup>2<i>x</i></sup>",b:"1",ans:2,ex:"2x is always even, and −1 raised to any even power is 1. Both quantities equal 1."},
{id:"q2",s:"quant",t:"Arithmetic",k:"qc",d:2,p:"",a:"(0.3)<sup>2</sup>",b:"0.3",ans:1,ex:"(0.3)² = 0.09, which is less than 0.3. Squaring a number between 0 and 1 makes it smaller."},
{id:"q3",s:"quant",t:"Algebra",k:"qc",d:2,p:"<i>x</i><sup>2</sup> = 16",a:"<i>x</i>",b:"4",ans:3,ex:"x could be 4 or −4. If x = 4 the quantities are equal; if x = −4, B is greater. The relationship can't be determined."},
{id:"q4",s:"quant",t:"Algebra",k:"qc",d:3,p:"0 &lt; <i>x</i> &lt; 1",a:"<i>x</i><sup>3</sup>",b:"√<i>x</i>",ans:1,ex:"For 0 < x < 1, higher powers shrink the number and roots enlarge it: x³ < x < √x. Try x = 1/4: x³ = 1/64, √x = 1/2."},
{id:"q5",s:"quant",t:"Arithmetic",k:"qc",d:2,p:"",a:"The number of prime numbers between 10 and 30",b:"6",ans:2,ex:"The primes are 11, 13, 17, 19, 23 and 29 — six of them."},
{id:"q6",s:"quant",t:"Geometry",k:"qc",d:2,p:"A triangle has sides of length 5, 12 and 13.",a:"The area of the triangle",b:"30",ans:2,ex:"5² + 12² = 13², so it's a right triangle with legs 5 and 12. Area = ½ × 5 × 12 = 30."},
{id:"q7",s:"quant",t:"Algebra",k:"qc",d:3,p:"<i>a</i> and <i>b</i> are integers and <i>a</i> + <i>b</i> = 10.",a:"<i>ab</i>",b:"25",ans:3,ex:"If a = b = 5, ab = 25 (equal). If a = 4 and b = 6, ab = 24 (B greater). Since both outcomes are possible, the answer is D."},
{id:"q8",s:"quant",t:"Arithmetic",k:"mc",d:1,p:"A jacket sells for $40 after a 20% discount. What was the original price?",o:["$48","$50","$52","$56","$60"],ans:1,ex:"Sale price = 0.8 × original. Original = 40 ÷ 0.8 = $50."},
{id:"q10",s:"quant",t:"Algebra",k:"mc",d:2,p:"If <i>x</i> + 1/<i>x</i> = 5, what is the value of <i>x</i><sup>2</sup> + 1/<i>x</i><sup>2</sup>?",o:["10","21","23","25","27"],ans:2,ex:"Square both sides: x² + 2 + 1/x² = 25, so x² + 1/x² = 23."},
{id:"q13",s:"quant",t:"Arithmetic",k:"multi",d:2,p:"Which of the following are factors of 36? <b>Indicate all such numbers.</b>",o:["4","6","8","9","12","24"],ans:[0,1,3,4],ex:"36 = 2² × 3². Its factors include 4, 6, 9 and 12. 8 and 24 both need 2³."},
{id:"q15",s:"quant",t:"Data Analysis",k:"mc",d:2,p:"Two fair six-sided dice are rolled. What is the probability that the sum is 7?",o:["1/12","1/9","5/36","1/6","7/36"],ans:3,ex:"Six of the 36 outcomes sum to 7, so the probability is 6/36 = 1/6."},
{id:"q20",s:"quant",t:"Algebra",k:"multi",d:3,p:"If <i>x</i><sup>2</sup> − 5<i>x</i> + 6 &lt; 0, which of the following could be the value of <i>x</i>? <b>Indicate all such values.</b>",o:["1.5","2.5","2.9","3","3.5"],ans:[1,2],ex:"(x − 2)(x − 3) < 0 only strictly between 2 and 3, so 2.5 and 2.9."},
{id:"q24",s:"quant",t:"Arithmetic",k:"num",d:3,p:"The price of an item is increased by 25% and the new price is then decreased by 20%. By what percent does the final price differ from the original? (Enter 0 if there is no change.)",ans:0,ex:"1.25 × 0.80 = 1.00, so the price is unchanged: 0%."},
{id:"q31",s:"quant",t:"Data Analysis",k:"multi",d:3,p:"Set S = {2, 4, 6, 8, 10}. Which of the following changes would <b>increase</b> the standard deviation of S? <b>Indicate all that apply.</b>",o:["Add the number 6 to S","Add the number 20 to S","Remove the number 6 from S","Multiply every number in S by 2","Add 3 to every number in S"],ans:[1,2,3],ex:"Adding a far value (20), removing the value at the mean (6), and doubling every value all spread the data. Adding the mean shrinks SD; adding 3 to everything only shifts it."},
{id:"q33",s:"quant",t:"Algebra",k:"qc",d:3,p:"<i>x</i> &gt; 0 and <i>y</i> &lt; 0",a:"<i>x</i> − <i>y</i>",b:"<i>x</i> + <i>y</i>",ans:0,ex:"Subtract x from both: compare −y with y. Since y is negative, −y > y, so A is greater."},
// VERBAL — Text Completion
{id:"v1",s:"verbal",t:"Text Completion",k:"tc",d:1,p:"Although the critic praised the novel's ambitious structure, she found its prose (i)___, full of clichés and tired phrasing.",blanks:[["pedestrian","luminous","intricate","venomous","laconic"]],ans:[0],ex:"'Although' contrasts with the praise, and 'clichés and tired phrasing' defines the blank: dull and ordinary — pedestrian."},
{id:"v2",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"The senator's reputation for (i)___ was so well established that even her opponents conceded she never misrepresented the facts.",blanks:[["probity","bombast","equivocation","parsimony","levity"]],ans:[0],ex:"'Never misrepresented the facts' points to probity: strict honesty."},
{id:"v3",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"Far from being (i)___, the professor's lectures were so meticulously organized that students could reconstruct them from memory.",blanks:[["desultory","rigorous","compelling","didactic","eloquent"]],ans:[0],ex:"'Far from being' signals the opposite of 'meticulously organized': desultory, meaning lacking order."},
{id:"v4",s:"verbal",t:"Text Completion",k:"tc",d:3,p:"The scientist's early findings were initially dismissed as (i)___, but later experiments confirmed them so thoroughly that they became the field's orthodoxy.",blanks:[["aberrant","seminal","canonical","incontrovertible","prosaic"]],ans:[0],ex:"Findings that were 'dismissed' then became orthodox were first seen as abnormal: aberrant."},
{id:"v5",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"The negotiator's (i)___ manner masked a(n) (ii)___ resolve: she seemed agreeable but rarely gave ground.",blanks:[["affable","abrasive","morose"],["implacable","wavering","feigned"]],ans:[0,0],ex:"'Seemed agreeable' gives affable; 'rarely gave ground' gives implacable."},
{id:"v6",s:"verbal",t:"Text Completion",k:"tc",d:3,p:"Historians once regarded the treaty as a (i)___ triumph, but newly opened archives reveal that its architects privately considered it a (ii)___, a concession wrung from them by circumstances they could not control.",blanks:[["diplomatic","fleeting","military"],["capitulation","masterstroke","formality"]],ans:[0,0],ex:"A treaty is a diplomatic achievement; 'a concession wrung from them' defines capitulation."},
{id:"v7",s:"verbal",t:"Text Completion",k:"tc",d:3,p:"The documentary's tone is relentlessly (i)___; its director refuses to (ii)___ the tragedies she records, presenting even the most harrowing scenes without music or narration that might (iii)___ the viewer's response.",blanks:[["austere","sentimental","whimsical"],["embellish","investigate","catalog"],["guide","ignore","deaden"]],ans:[0,0,0],ex:"No music or narration means a stark style (austere); she won't embellish events or add anything that would guide viewers' feelings."},
{id:"v13",s:"verbal",t:"Text Completion",k:"tc",d:1,p:"Because the instructions were so (i)___, even first-time users assembled the shelf without difficulty.",blanks:[["lucid","convoluted","terse","ornate","perfunctory"]],ans:[0],ex:"Easy assembly for beginners means the instructions were clear: lucid."},
{id:"v14",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"The CEO's (i)___ remarks at the press conference, which seemed to promise everything and commit to nothing, frustrated investors seeking clarity.",blanks:[["equivocal","forthright","caustic","effusive","banal"]],ans:[0],ex:"Promising everything and committing to nothing is equivocal: deliberately ambiguous."},
{id:"v15",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"Despite his reputation as a (i)___, the novelist was in private generous with praise for younger writers.",blanks:[["curmudgeon","philanthropist","sycophant","raconteur","neophyte"]],ans:[0],ex:"'Despite' contrasts with 'generous with praise', so his reputation was for being grumpy: curmudgeon."},
{id:"v16",s:"verbal",t:"Text Completion",k:"tc",d:3,p:"At first the reforms seemed (i)___, touching only procedural details, but their cumulative effect was to (ii)___ the agency's entire mission.",blanks:[["cosmetic","sweeping","popular"],["transform","safeguard","clarify"]],ans:[0,0],ex:"Touching only details means cosmetic; 'but' and 'cumulative effect' point to a big change: transform."},
{id:"v17",s:"verbal",t:"Text Completion",k:"tc",d:2,p:"The archive's holdings are so (i)___ that researchers often spend weeks locating a single letter; a proper catalog would (ii)___ much of this effort.",blanks:[["disorganized","meager","celebrated"],["obviate","duplicate","reward"]],ans:[0,0],ex:"Weeks to find one letter means disorganized; a catalog would make that effort unnecessary: obviate."},
{id:"v18",s:"verbal",t:"Text Completion",k:"tc",d:3,p:"Her critique was devastating precisely because it was so (i)___: rather than (ii)___ her opponent, she calmly (iii)___ each of his claims with documented evidence.",blanks:[["measured","impassioned","oblique"],["vilify","praise","ignore"],["dismantled","endorsed","embellished"]],ans:[0,0,0],ex:"'Calmly' gives measured; 'rather than' contrasts with personal attack (vilify); evidence was used to dismantle his claims."},
{id:"v19",s:"verbal",t:"Text Completion",k:"tc",d:1,p:"The weather in the mountains is notoriously (i)___; hikers are advised to pack for sun, rain and snow on the same day.",blanks:[["capricious","temperate","predictable","arid","frigid"]],ans:[0],ex:"Sun, rain and snow in one day means unpredictable: capricious."},
// VERBAL — Sentence Equivalence
{id:"v8",s:"verbal",t:"Sentence Equivalence",k:"se",d:2,p:"Though the startup's founders were initially ______ about their prospects, a string of early contracts soon made them confident.",o:["diffident","sanguine","tentative","exuberant","complacent","indifferent"],ans:[0,2],ex:"They started out unsure: diffident and tentative."},
{id:"v9",s:"verbal",t:"Sentence Equivalence",k:"se",d:2,p:"The mayor's speech was so ______ that audience members struggled to identify a single concrete proposal.",o:["nebulous","vague","incisive","pithy","strident","candid"],ans:[0,1],ex:"No concrete proposal means unclear content: nebulous and vague."},
{id:"v10",s:"verbal",t:"Sentence Equivalence",k:"se",d:3,p:"Critics accused the museum of ______ public taste, mounting crowd-pleasing exhibitions instead of challenging ones.",o:["pandering to","catering to","defying","elevating","scorning","ignoring"],ans:[0,1],ex:"Crowd-pleasing shows give people what they want: pandering to, catering to."},
{id:"v11",s:"verbal",t:"Sentence Equivalence",k:"se",d:1,p:"The once-thriving port town had become ______, its warehouses empty and its streets quiet.",o:["desolate","bustling","forlorn","prosperous","notorious","picturesque"],ans:[0,2],ex:"Empty and quiet: desolate and forlorn."},
{id:"v12",s:"verbal",t:"Sentence Equivalence",k:"se",d:3,p:"Her account of the expedition was notably ______: she credited her team for every success and blamed only herself for its failures.",o:["self-effacing","modest","boastful","meticulous","cryptic","partisan"],ans:[0,1],ex:"Giving credit away and taking blame is humility: self-effacing, modest."},
{id:"v20",s:"verbal",t:"Sentence Equivalence",k:"se",d:1,p:"The professor was known for her ______ lectures, which rarely ran over and never wandered from the topic.",o:["concise","succinct","rambling","tedious","ornate","digressive"],ans:[0,1],ex:"Short and on topic: concise and succinct."},
{id:"v21",s:"verbal",t:"Sentence Equivalence",k:"se",d:2,p:"Even the critic's harshest detractors acknowledged that her judgments, however unpopular, were ______.",o:["cogent","compelling","capricious","arbitrary","fashionable","timid"],ans:[0,1],ex:"'However unpopular' sets up a concession of quality: cogent and compelling."},
{id:"v22",s:"verbal",t:"Sentence Equivalence",k:"se",d:2,p:"The committee's decision to ______ the policy surprised observers, who had expected it to be expanded.",o:["rescind","revoke","extend","broaden","publicize","endorse"],ans:[0,1],ex:"The opposite of expanding it: rescind and revoke."},
{id:"v23",s:"verbal",t:"Sentence Equivalence",k:"se",d:3,p:"What the coach saw as admirable persistence, his players regarded as mere ______.",o:["obstinacy","intransigence","diligence","timidity","generosity","flexibility"],ans:[0,1],ex:"The negative version of persistence: obstinacy and intransigence."},
{id:"v24",s:"verbal",t:"Sentence Equivalence",k:"se",d:3,p:"The biography is ______: the author includes every receipt and minor quarrel, burying the subject's life under trivia.",o:["prolix","verbose","terse","incisive","laudatory","balanced"],ans:[0,1],ex:"Overlong and wordy: prolix and verbose."},
{id:"v25",s:"verbal",t:"Sentence Equivalence",k:"se",d:2,p:"Long dismissed as ______, the theory gained credibility once satellite data supported its predictions.",o:["fanciful","far-fetched","rigorous","orthodox","venerable","empirical"],ans:[0,1],ex:"Dismissed, then confirmed: it was once seen as fanciful, far-fetched."},
{id:"v26",s:"verbal",t:"Sentence Equivalence",k:"se",d:1,p:"After hours of debate, the exhausted negotiators finally reached a ______ agreement that both sides promised to revisit in the spring.",o:["tentative","provisional","binding","permanent","hostile","secret"],ans:[0,1],ex:"An agreement to be revisited is not final: tentative, provisional."},
// VERBAL — Reading Comprehension
{id:"r1",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p1",p:"The primary purpose of the passage is to",o:["refute the claim that pesticides harm wild bees","argue that habitat loss matters more than any other factor in bee decline","present evidence that complicates a single-cause explanation and propose a more integrated view","describe a new method for counting bee populations","recommend that farmers stop using pesticides"],ans:2,ex:"The passage complicates the pesticide-only account and ends with 'interacting stresses.'"},
{id:"r2",s:"verbal",t:"Reading Comprehension",k:"mc",d:1,pid:"p1",p:"According to the passage, crops alone are inadequate forage for wild bees because crops",o:["require heavy pesticide use","bloom briefly and all at once","produce little nectar","are usually pollinated by wind","are planted far from nesting sites"],ans:1,ex:"Crops 'bloom briefly and all at once' and can't provide season-long flowers."},
{id:"r3",s:"verbal",t:"Reading Comprehension",k:"multi",d:3,pid:"p1",p:"Which of the following can be inferred from the passage? <b>Select all that apply.</b>",o:["Farms with similar pesticide use can differ greatly in bee abundance.","Pesticides have no effect on bees in landscapes with plenty of refuge habitat.","The author would likely regard reducing pesticide use, by itself, as an incomplete remedy."],ans:[0,2],ex:"A restates the fourfold finding; C follows from 'interacting stresses.' B overstates."},
{id:"r4",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p2",p:"The author mentions critics who saw the serial authors' responsiveness as 'a compromise' primarily in order to",o:["introduce a view that the author goes on to qualify","support the claim that serial novels sold poorly","show that Victorian readers disliked long novels","argue that authors should ignore their audiences","explain why monthly installments were abandoned"],ans:0,ex:"'Yet the serial form also produced distinctive artistic effects' qualifies that view."},
{id:"r5",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p2",p:"In context, 'baggy' most nearly means",o:["loosely constructed","overly sentimental","commercially successful","deliberately ambiguous","historically inaccurate"],ans:0,ex:"Paired with 'sprawling' and 'failure of discipline': loosely constructed."},
{id:"r6",s:"verbal",t:"Reading Comprehension",k:"mc",d:3,pid:"p2",p:"The author's attitude toward the multi-plot structure of serial novels is best described as",o:["dismissive impatience","nostalgic longing","appreciative reassessment","guarded hostility","scholarly indifference"],ans:2,ex:"It reframes a faulted feature as 'a technique fitted to its medium.'"},
{id:"r7",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p3",p:"Which of the following, if true, most seriously weakens the council's conclusion?",o:["Weekday bus ridership also increased during the year.","During the same year, a large downtown shopping center reopened after two years of renovation.","Most weekend riders were college students.","Retail sales in the suburbs fell slightly during the year.","The cost of running weekend buses was higher than expected."],ans:1,ex:"A reopened shopping center is an alternative cause for higher downtown sales."},
{id:"r8",s:"verbal",t:"Reading Comprehension",k:"mc",d:3,pid:"p3",p:"Which of the following, if true, most strengthens the council's conclusion?",o:["Many downtown shops extended their weekend hours.","Weekend downtown sales in comparable nearby cities without free transit stayed flat over the same period.","Bus fares had previously been among the highest in the region.","The city also repaved several downtown streets.","Downtown parking fees rose during the year."],ans:1,ex:"Comparable cities without the policy saw no change, which supports transit as the cause."},
{id:"r9",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p4",p:"The passage is primarily concerned with",o:["describing evidence for a revised estimate of the rings' age and noting an unresolved objection","explaining how Saturn's rings formed alongside the planet","arguing that the Cassini mission was poorly designed","comparing Saturn's rings with those of other planets","proving that the rings are only a few hundred million years old"],ans:0,ex:"It presents the brightness evidence for young rings, then the self-cleaning objection, and ends undecided."},
{id:"r10",s:"verbal",t:"Reading Comprehension",k:"mc",d:3,pid:"p4",p:"The author's statement that the rings' brightness is 'suggestive rather than decisive' indicates that the brightness",o:["is consistent with a young age but does not settle the question","has been shown to be a measurement error","proves that the rings recycle their material","is irrelevant to the age of the rings","supports the traditional view of the rings' age"],ans:0,ex:"Suggestive but not decisive: it points toward youth without settling it."},
{id:"r11",s:"verbal",t:"Reading Comprehension",k:"multi",d:3,pid:"p4",p:"Which of the following can be inferred from the passage? <b>Select all that apply.</b>",o:["Rings as old as the planet, with no way of renewing their surface, would likely look darker than Saturn's do.","Cassini gathered data on the rate at which dust falls into the Saturn system.","Most astronomers now agree that the rings are young."],ans:[0,1],ex:"A follows from dust darkening exposed ice; B from 'the dust-infall rate Cassini recorded.' C ignores the researchers who disagree."},
{id:"r12",s:"verbal",t:"Reading Comprehension",k:"mc",d:2,pid:"p5",p:"The author regards the commercial explanation of the telegraph's spread as",o:["incomplete rather than wrong","entirely mistaken","the most persuasive account available","irrelevant to the nineteenth century","supported mainly by military records"],ans:0,ex:"'That account, while not false, omits the role of the state.'"},
{id:"r13",s:"verbal",t:"Reading Comprehension",k:"mc",d:3,pid:"p5",p:"The sentence beginning 'Where such support was absent' serves mainly to",o:["provide evidence that commercial demand alone cannot explain the telegraph's spread","show that governments opposed the telegraph","concede that markets were unimportant","explain why railroads were built","introduce a new topic unrelated to the argument"],ans:0,ex:"Active markets without state support still lagged, so demand alone isn't enough."},
{id:"r14",s:"verbal",t:"Reading Comprehension",k:"mc",d:3,pid:"p5",p:"Which of the following, if true, would most support the author's argument?",o:["In two regions with similar commercial activity, the one whose government granted railroad rights-of-way built telegraph lines years earlier.","Merchants in port cities were the earliest users of the telegraph.","Telegraph rates fell steadily throughout the century.","Some private telegraph companies earned large profits.","Military uses of the telegraph declined after 1900."],ans:0,ex:"Holding demand constant and varying state support isolates the effect the author describes."}
];
const PASSAGES={
p1:{title:"Passage · Ecology",text:"<p>For decades, ecologists assumed that the decline of wild bee populations in agricultural regions was driven primarily by pesticide exposure. Recent field studies complicate this account. When researchers compared farms with similar pesticide regimes, bee abundance varied by as much as fourfold, and the strongest predictor of that variation was not chemical use but the amount of uncultivated land — hedgerows, field margins, and fallow patches — within a kilometer of the crops.</p><p>Such land supplies the nesting sites and the season-long succession of flowers that crops, which bloom briefly and all at once, cannot provide. None of this exonerates pesticides; in landscapes stripped of refuge habitat, their effects appear to be magnified, since bees have no unexposed forage to fall back on. The more plausible picture is one of interacting stresses, in which habitat loss sets the stage on which chemical harm plays out.</p>"},
p2:{title:"Passage · Literature",text:"<p>When Victorian novels appeared in monthly installments, readers encountered them not as finished objects but as unfolding events. Authors read letters from their audiences, watched sales rise and fall, and sometimes altered plots midstream. Some critics have treated this responsiveness as a compromise — an artist bending to the market.</p><p>Yet the serial form also produced distinctive artistic effects. Because each installment had to sustain interest across a month's silence, writers developed large casts of characters whose stories interwove, allowing a narrative to move away from one thread and return to it with renewed suspense. The sprawling, multi-plot structure that later readers sometimes faulted as baggy may thus be better understood as a technique fitted to its medium than as a failure of discipline.</p>"},
p3:{title:"Passage · Argument",text:"<p>Last year the city of Marlow introduced free bus service on weekends. Over the following twelve months, weekend retail sales in the downtown district rose by 12 percent. The city council has concluded that free weekend transit boosted downtown commerce and plans to extend free service to weekdays.</p>"},
p4:{title:"Passage · Astronomy",text:"<p>Astronomers long assumed that the rings of Saturn formed along with the planet itself, some four and a half billion years ago. Measurements from the Cassini spacecraft have unsettled that view. Because interplanetary dust steadily darkens any exposed ice, ancient rings should appear sooty; Saturn's are strikingly bright, composed almost entirely of nearly pure water ice.</p><p>On the basis of the dust-infall rate Cassini recorded, several researchers now argue that the rings may be only a few hundred million years old. Others counter that the rings could have purified themselves over time, recycling material so that fresh ice is continually exposed. Until that recycling process is better understood, the rings' brightness is suggestive rather than decisive.</p>"},
p5:{title:"Passage · Economic history",text:"<p>Economic historians once explained the rapid spread of the telegraph in the nineteenth century as a straightforward response to commercial demand: merchants needed faster price information, and entrepreneurs supplied it. That account, while not false, omits the role of the state.</p><p>In several countries, governments financed early lines, granted rights-of-way along railroads, and in some cases operated the networks outright, often for military or administrative reasons that had little to do with commerce. Where such support was absent, construction lagged even in regions with active markets. The telegraph's diffusion, in short, reflected not only the pull of demand but also the push of policy.</p>"}
};
const PROMPTS=[
{id:"i1",text:"Universities should require every student to take courses outside their major field of study, even if doing so delays graduation."},
{id:"i2",text:"The best way for a society to prepare young people for leadership is to give them real responsibility early."},
{id:"i3",text:"Technology has made people less patient, and this is a loss worth worrying about."},
{id:"i4",text:"A nation's greatness is best measured by how it treats its least powerful members."},
{id:"i5",text:"Experts in a field are often the people least likely to produce its most original ideas."},
{id:"i6",text:"Governments should continue to fund the arts even when budgets for basic services are tight."},
{id:"i7",text:"People learn more from failure than from success."},
{id:"i8",text:"Local news is more important to a community than national news."},
{id:"i9",text:"Leaders should be judged by the long-term consequences of their decisions rather than by their intentions."},
{id:"i10",text:"Competition among students does more harm than good to their education."},
{id:"i11",text:"The most valuable skill a person can develop is the ability to change their mind."},
{id:"i12",text:"Cities should give pedestrians and cyclists priority over cars in their downtown areas."}
];
const ISSUE_TASK="Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, consider ways in which the statement might or might not hold true, and explain how these considerations shape your position.";
const VOCAB=[["abate","v.","to become less intense"],["aberrant","adj.","departing from what is normal"],["abstruse","adj.","hard to understand"],["acumen","n.","keen insight"],["admonish","v.","to warn or reprimand firmly"],["adroit","adj.","skillful and clever"],["alacrity","n.","cheerful readiness"],["amenable","adj.","open to suggestion"],["ameliorate","v.","to make a bad situation better"],["anachronism","n.","something out of its proper time"],["anomaly","n.","something that deviates from the expected"],["antipathy","n.","a deep-seated dislike"],["apathy","n.","lack of interest or concern"],["approbation","n.","approval or praise"],["arcane","adj.","understood by few; obscure"],["ascetic","adj.","practicing strict self-denial"],["assiduous","adj.","showing great care and persistence"],["assuage","v.","to ease or soothe"],["audacious","adj.","boldly daring"],["austere","adj.","severe or plain; without decoration"],["banal","adj.","so ordinary as to be boring"],["belie","v.","to give a false impression of"],["bolster","v.","to support or strengthen"],["bombastic","adj.","pompous in speech or writing"],["burgeon","v.","to grow or develop rapidly"],["cacophony","n.","a harsh mixture of sounds"],["candor","n.","frankness and honesty"],["capricious","adj.","prone to sudden, unpredictable changes"],["castigate","v.","to criticize severely"],["chicanery","n.","trickery used to deceive"],["circumspect","adj.","cautious; considering consequences"],["cogent","adj.","clear, logical and convincing"],["complacent","adj.","smugly self-satisfied"],["conciliatory","adj.","intended to soothe or win over"],["convoluted","adj.","extremely complex and hard to follow"],["corroborate","v.","to confirm with evidence"],["credulous","adj.","too ready to believe things"],["dearth","n.","a scarcity or lack"],["deference","n.","respectful yielding to another"],["denigrate","v.","to criticize unfairly; belittle"],["deride","v.","to mock or ridicule"],["desultory","adj.","lacking plan, purpose or order"],["didactic","adj.","intended to teach or instruct"],["diffident","adj.","shy; lacking self-confidence"],["disabuse","v.","to free someone from a mistaken belief"],["discerning","adj.","showing good judgment"],["disparate","adj.","fundamentally different"],["dissemble","v.","to conceal one's true motives"],["dogmatic","adj.","stating opinions as if they were facts"],["ebullient","adj.","cheerful and full of energy"],["eclectic","adj.","drawn from a wide range of sources"],["efficacy","n.","the ability to produce a desired result"],["elucidate","v.","to make clear; explain"],["enervate","v.","to weaken or drain of energy"],["engender","v.","to cause or give rise to"],["enigmatic","adj.","mysterious and hard to interpret"],["ephemeral","adj.","lasting a very short time"],["equanimity","n.","calmness under stress"],["equivocate","v.","to speak vaguely to avoid committing"],["erudite","adj.","having great knowledge from study"],["esoteric","adj.","intended for a small, specialized group"],["exacerbate","v.","to make worse"],["extol","v.","to praise enthusiastically"],["fastidious","adj.","very attentive to accuracy and detail"],["fervent","adj.","having intense feeling"],["frugal","adj.","sparing; economical"],["gainsay","v.","to deny or contradict"],["garrulous","adj.","excessively talkative"],["gregarious","adj.","fond of company; sociable"],["hackneyed","adj.","overused and unoriginal"],["harangue","n.","a long, aggressive speech"],["hubris","n.","excessive pride"],["iconoclast","n.","one who attacks established beliefs"],["impetuous","adj.","acting quickly without thought"],["implacable","adj.","unable to be appeased or stopped"],["inchoate","adj.","just begun; not fully formed"],["incongruous","adj.","out of place; not in harmony"],["indolent","adj.","lazy; avoiding effort"],["ingenuous","adj.","innocent and unsuspecting"],["insipid","adj.","lacking flavor or interest"],["intransigent","adj.","refusing to compromise"],["irascible","adj.","easily angered"],["laconic","adj.","using very few words"],["laud","v.","to praise highly"],["loquacious","adj.","very talkative"],["lucid","adj.","clear and easy to understand"],["magnanimous","adj.","generous in forgiving"],["malleable","adj.","easily shaped or influenced"],["meticulous","adj.","showing great attention to detail"],["misanthrope","n.","a person who dislikes humankind"],["mitigate","v.","to make less severe"],["mollify","v.","to soothe someone's anger"],["nascent","adj.","just coming into existence"],["obdurate","adj.","stubbornly refusing to change"],["obsequious","adj.","excessively eager to please"],["obviate","v.","to remove a need or difficulty"],["opaque","adj.","hard to understand; not transparent"],["paucity","n.","a small or insufficient amount"],["pedantic","adj.","overly concerned with minor rules"],["pedestrian","adj.","dull; lacking imagination"],["penchant","n.","a strong liking or tendency"],["perfunctory","adj.","done with minimal effort or care"],["pernicious","adj.","harmful in a gradual or subtle way"],["placate","v.","to calm or pacify"],["plethora","n.","an excessive amount"],["pragmatic","adj.","dealing with things practically"],["pristine","adj.","in original, unspoiled condition"],["probity","n.","strict honesty and integrity"],["prodigal","adj.","wastefully extravagant"],["prolific","adj.","producing a great deal"],["propriety","n.","conformity to accepted behavior"],["prosaic","adj.","commonplace; unromantic"],["pusillanimous","adj.","lacking courage"],["quiescent","adj.","inactive or dormant"],["quixotic","adj.","idealistic but impractical"],["recalcitrant","adj.","stubbornly uncooperative"],["reticent","adj.","reserved; not revealing thoughts"],["salient","adj.","most noticeable or important"],["sanguine","adj.","optimistic, especially in a bad situation"],["scrupulous","adj.","careful and principled"],["soporific","adj.","tending to induce sleep"],["spurious","adj.","false though seeming genuine"],["stolid","adj.","calm and showing little emotion"],["superfluous","adj.","unnecessary; more than needed"],["sycophant","n.","a person who flatters to gain favor"],["taciturn","adj.","reserved; saying little"],["tenuous","adj.","very weak or slight"],["torpor","n.","a state of inactivity or lethargy"],["tractable","adj.","easily managed or controlled"],["ubiquitous","adj.","present everywhere"],["vacillate","v.","to waver between opinions"],["venerate","v.","to regard with deep respect"],["vex","v.","to annoy or frustrate"],["vindicate","v.","to clear of blame"],["volatile","adj.","liable to change rapidly"],["zealot","n.","a fanatical supporter of a cause"]];
const FORMULAS=[
["Arithmetic & percents",[["Percent change","(new − old) ÷ old × 100"],["Successive % changes","multiply the factors"],["Simple interest","I = Prt"],["Compound interest","A = P(1 + r/n)ⁿᵗ"],["Ratio a : b of a total","a ÷ (a + b) × total"]]],
["Algebra",[["Square of a sum","(a + b)² = a² + 2ab + b²"],["Difference of squares","a² − b² = (a + b)(a − b)"],["Quadratic formula","x = (−b ± √(b² − 4ac)) ÷ 2a"],["Exponent rules","aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ"],["Slope","m = (y₂ − y₁) ÷ (x₂ − x₁)"],["Line","y = mx + b"]]],
["Geometry",[["Triangle area","½ × base × height"],["Pythagorean theorem","a² + b² = c²"],["Common triples","3-4-5, 5-12-13, 8-15-17, 7-24-25"],["30-60-90 sides","x : x√3 : 2x"],["45-45-90 sides","x : x : x√2"],["Interior angle sum","(n − 2) × 180°"],["Circle","C = 2πr, A = πr²"],["Arc length","(θ ÷ 360) × 2πr"],["Cylinder volume","πr²h"],["Distance","√((x₂−x₁)² + (y₂−y₁)²)"]]],
["Data analysis",[["Mean","sum ÷ count"],["Median (even n)","mean of middle two"],["Normal curve","68% · 95% · 99.7% within 1, 2, 3 SD"],["P(A or B)","P(A) + P(B) − P(A and B)"],["Independent events","P(A and B) = P(A) × P(B)"],["Permutations","n! ÷ (n − r)!"],["Combinations","n! ÷ (r!(n − r)!)"],["Two sets","Total = A + B − Both + Neither"]]],
["Rates & work",[["Distance","d = rt"],["Average speed","total distance ÷ total time"],["Round trip at a and b","2ab ÷ (a + b)"],["Combined work","1/a + 1/b = 1/t"]]]
];
const TOPICS={quant:["Arithmetic","Algebra","Geometry","Data Analysis"],verbal:["Text Completion","Sentence Equivalence","Reading Comprehension"]};
const LETTERS="ABCDEFGH";
const THEMES=["marine biology","Renaissance art","urban planning","behavioral economics","volcanology","the history of printing","linguistics","jazz history","climate science","archaeology of West Africa","neuroscience of memory","medieval trade routes","quantum physics","public health","film criticism","political philosophy","paleontology","agricultural history","architecture","sociology of work","astronomy","material science","the history of medicine","literary modernism","migration of birds","the history of mathematics","ethics of technology","anthropology","coral reefs","early photography"];

/* ============================== SEEDED RANDOMNESS ============================== */
function seedOf(str){let h=2166136261>>>0;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mkR(seed){let a=seed>>>0;const f=()=>{a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
  return{f,int:(lo,hi)=>lo+Math.floor(f()*(hi-lo+1)),pick:arr=>arr[Math.floor(f()*arr.length)],chance:p=>f()<p,shuffle:arr=>{arr=arr.slice();for(let i=arr.length-1;i>0;i--){const j=Math.floor(f()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}}}
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a};
const frac=(n,d)=>{const g=gcd(n,d)||1;n/=g;d/=g;if(d<0){n=-n;d=-d}return d===1?String(n):n+"/"+d};
const fmtN=x=>{const s=String(+(+x).toFixed(4));return s.replace(/^-/,"−")};
const money=x=>"$"+(Number.isInteger(x)?x:(+x).toFixed(2));
const choose=(n,r)=>{let v=1;for(let i=0;i<r;i++)v=v*(n-i)/(i+1);return Math.round(v)};
function mcFrom(R,correct,distr,fmtv=fmtN){
  const out=[[correct,fmtv(correct)]];const seen=new Set([out[0][1]]);
  const add=x=>{if(out.length>=5||x===undefined||x===null||(typeof x==="number"&&!isFinite(x)))return;const s=fmtv(x);if(!seen.has(s)){seen.add(s);out.push([x,s])}};
  distr.forEach(add);let k=1;while(out.length<5&&typeof correct==="number"&&k<60){add(correct+k);add(correct-k);k++}
  const sorted=typeof correct==="number"?out.sort((a,b)=>a[0]-b[0]):R.shuffle(out);
  return{o:sorted.map(x=>x[1]),ans:sorted.findIndex(x=>x[1]===fmtv(correct))};
}
const qc=(p,a,b,ans,ex)=>({k:"qc",p,a,b,ans,ex});
const ix=v=>"<i>"+v+"</i>";

/* ============================== QUANT GENERATORS ============================== */
// Each generator builds a fresh, correct question from seeded random numbers.
const GENS=[
{n:"discount",t:"Arithmetic",d:1,f:R=>{const pct=R.pick([10,15,20,25,30,40]);const O=R.int(3,20)*20;const sale=O*(100-pct)/100;const trap=+(sale*(1+pct/100)).toFixed(2);const m=mcFrom(R,O,[trap,O+pct,sale+pct,O-20],money);
  return{k:"mc",p:`A coat is on sale for ${money(sale)} after a ${pct}% discount. What was the original price?`,...m,ex:`The sale price is ${100-pct}% of the original, so original = ${sale} ÷ ${(100-pct)/100} = ${money(O)}. Adding ${pct}% to the sale price (${money(trap)}) is the classic trap.`}}},
{n:"succpct",t:"Arithmetic",d:2,f:R=>{const a=R.pick([10,20,25,50]);const b=R.pick([10,20,25,40,50]);const net=+(((1+a/100)*(1-b/100)-1)*100).toFixed(4);
  return{k:"num",p:`A price is increased by ${a}% and the new price is then decreased by ${b}%. What is the overall percent change from the original price? (Enter a negative number for a decrease.)`,ans:net,unit:"%",ex:`Multiply the factors: ${1+a/100} × ${1-b/100} = ${+((1+a/100)*(1-b/100)).toFixed(4)}, a change of ${fmtN(net)}%. Percent changes do not simply add.`}}},
{n:"linear",t:"Algebra",d:1,f:R=>{const a=R.int(2,9),x=R.int(-6,12),b=R.int(-20,20);const c=a*x+b;const m=mcFrom(R,x,[x+1,x-1,-x,(c+b)/a]);
  return{k:"mc",p:`If ${a}${ix("x")} ${b<0?"−":"+"} ${Math.abs(b)} = ${fmtN(c)}, what is the value of ${ix("x")}?`,...m,ex:`Move the constant: ${a}x = ${fmtN(c)} ${b<0?"+":"−"} ${Math.abs(b)} = ${fmtN(a*x)}. Divide by ${a}: x = ${fmtN(x)}.`}}},
{n:"avgadd",t:"Data Analysis",d:2,f:R=>{const n=R.int(3,7),a1=R.int(10,40),dd=R.pick([-4,-3,-2,2,3,4,5,6]);const a2=a1+dd;const v=(n+1)*a2-n*a1;
  return{k:"num",p:`The average (arithmetic mean) of ${n} numbers is ${a1}. When one more number is added, the average becomes ${a2}. What number was added?`,ans:v,ex:`Original sum = ${n} × ${a1} = ${n*a1}. New sum = ${n+1} × ${a2} = ${(n+1)*a2}. The added number is ${(n+1)*a2} − ${n*a1} = ${fmtN(v)}.`}}},
{n:"work",t:"Arithmetic",d:2,f:R=>{const [a,b]=R.pick([[6,3],[4,12],[10,15],[12,6],[20,30],[8,24],[5,20],[9,18],[12,24],[15,10]]);const t=a*b/(a+b);const m=mcFrom(R,t,[(a+b)/2,a+b,Math.abs(a-b),t+1]);
  return{k:"mc",p:`Pump A can fill a tank in ${a} hours and pump B can fill it in ${b} hours. Working together at these rates, how many hours will they take to fill the tank?`,...m,ex:`Combined rate = 1/${a} + 1/${b} = ${frac(a+b,a*b)} tank per hour, so time = ${fmtN(t)} hours. Averaging the times (${fmtN((a+b)/2)}) is a trap.`}}},
{n:"remainder",t:"Arithmetic",d:3,f:R=>{const base=R.pick([2,3,4,5,6,7]),e=R.int(9,40),mod=R.pick([3,5,7,9,11]);let r=1;const cyc=[];for(let i=1;i<=e;i++){r=r*base%mod;if(i<=8)cyc.push(r)}
  return{k:"num",p:`What is the remainder when ${base}<sup>${e}</sup> is divided by ${mod}?`,ans:r,ex:`Remainders of ${base}¹, ${base}², … divided by ${mod} follow a repeating pattern: ${cyc.join(", ")}, … Following the cycle to the ${e}th power gives ${r}.`}}},
{n:"units",t:"Arithmetic",d:2,f:R=>{const b=R.pick([2,3,4,7,8,9]),e=R.int(11,75);const cyc=[];let u=b%10;const start=u;do{cyc.push(u);u=u*b%10}while(u!==start&&cyc.length<5);const ans=cyc[(e-1)%cyc.length];const m=mcFrom(R,ans,[0,1,2,3,4,5,6,7,8,9].filter(x=>x!==ans).sort(()=>R.f()-.5));
  return{k:"mc",p:`What is the units digit of ${b}<sup>${e}</sup>?`,...m,ex:`Units digits of powers of ${b} cycle: ${cyc.join(", ")} (length ${cyc.length}). ${e} leaves remainder ${((e-1)%cyc.length)+1} in that cycle, so the units digit is ${ans}.`}}},
{n:"comb",t:"Data Analysis",d:2,f:R=>{const n=R.int(5,10),r=R.int(2,4);const c=choose(n,r);let p=1;for(let i=0;i<r;i++)p*=n-i;const m=mcFrom(R,c,[p,n*r,c+n,Math.pow(n,r)]);
  return{k:"mc",p:`In how many different ways can a committee of ${r} people be chosen from a group of ${n} people?`,...m,ex:`Order doesn't matter, so use combinations: ${n}C${r} = ${p} ÷ ${r}! = ${c}. ${p} counts ordered selections.`}}},
{n:"dice",t:"Data Analysis",d:2,f:R=>{const k=R.int(3,11);const cnt=6-Math.abs(k-7);const ans=frac(cnt,36);const ds=[2,3,4,5,6,7,8,9,10,11,12].filter(x=>x!==k).map(x=>frac(6-Math.abs(x-7),36));ds.push(frac(cnt,6*6*2),frac(1,k),frac(cnt,11));const m=mcFrom(R,ans,R.shuffle(ds),x=>x);
  return{k:"mc",p:`Two fair six-sided dice are rolled. What is the probability that the sum of the two numbers is ${k}?`,...m,ex:`There are 36 equally likely outcomes, and ${cnt} of them sum to ${k}. Probability = ${cnt}/36 = ${ans}.`}}},
{n:"circle",t:"Geometry",d:1,f:R=>{const r=R.int(3,12);const pf=x=>fmtN(x)+"π";const m=mcFrom(R,r*r,[2*r,4*r*r,r*r/2,2*r*r,r],pf);
  return{k:"mc",p:`A circle has circumference ${2*r}π. What is its area?`,...m,ex:`2πr = ${2*r}π, so r = ${r}. Area = πr² = ${r*r}π.`}}},
{n:"rectdiag",t:"Geometry",d:2,f:R=>{const [a,b,c]=R.pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25],[6,8,10],[9,12,15]]);const k=R.int(1,3);
  return{k:"num",p:`A rectangle has a diagonal of length ${c*k} and one side of length ${a*k}. What is the area of the rectangle?`,ans:a*b*k*k,ex:`The other side is √(${c*k}² − ${a*k}²) = ${b*k}. Area = ${a*k} × ${b*k} = ${a*b*k*k}.`}}},
{n:"dist",t:"Geometry",d:2,f:R=>{const [a,b,c]=R.pick([[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15]]);const x1=R.int(-6,6),y1=R.int(-6,6);const sx=R.chance(.5)?1:-1,sy=R.chance(.5)?1:-1;const x2=x1+sx*a,y2=y1+sy*b;
  return{k:"num",p:`What is the distance between the points (${fmtN(x1)}, ${fmtN(y1)}) and (${fmtN(x2)}, ${fmtN(y2)}) in the ${ix("xy")}-plane?`,ans:c,ex:`Horizontal change ${a}, vertical change ${b}. Distance = √(${a*a} + ${b*b}) = ${c}.`}}},
{n:"polygon",t:"Geometry",d:2,f:R=>{const n=R.int(5,10);const s=(n-2)*180;const rel=R.int(0,2);const B=rel===0?s-R.pick([10,20,40]):rel===1?s+R.pick([10,20,60]):s;const names={5:"pentagon",6:"hexagon",7:"heptagon",8:"octagon",9:"nonagon",10:"decagon"};
  return qc("",`The sum of the interior angles of a ${names[n]}, in degrees`,String(B),rel===0?0:rel===1?1:2,`Interior angle sum = (n − 2) × 180 = ${n-2} × 180 = ${s}. Compare with ${B}.`)}},
{n:"sqroot",t:"Algebra",d:2,f:R=>{const k=R.int(2,12);const v=R.int(0,2);
  if(v===0)return qc(`${ix("x")}<sup>2</sup> = ${k*k}`,ix("x"),String(k),3,`x could be ${k} or −${k}. One makes the quantities equal, the other makes B greater, so it cannot be determined.`);
  if(v===1)return qc(`${ix("x")}<sup>2</sup> = ${k*k} and ${ix("x")} &gt; 0`,ix("x"),String(k),2,`With x positive, x = ${k}, equal to Quantity B.`);
  return qc(`${ix("x")}<sup>2</sup> = ${k*k} and ${ix("x")} &lt; 0`,ix("x"),"−"+k,2,`With x negative, x = −${k}, equal to Quantity B.`)}},
{n:"fracpow",t:"Algebra",d:3,f:R=>{const pairs=[["<i>x</i><sup>2</sup>","<i>x</i><sup>3</sup>",0],["√<i>x</i>","<i>x</i>",0],["<i>x</i>","<i>x</i><sup>2</sup>",0],["1/<i>x</i>","<i>x</i>",0]];const [A,B]=R.pick(pairs);const flip=R.chance(.5);
  return qc("0 &lt; <i>x</i> &lt; 1",flip?B:A,flip?A:B,flip?1:0,"For numbers between 0 and 1, raising to higher powers makes them smaller, taking roots makes them larger, and 1/x is greater than 1. Test x = 1/4 to confirm.")}},
{n:"consec",t:"Algebra",d:2,f:R=>{const kind=R.pick(["consecutive","consecutive even","consecutive odd"]);const step=kind==="consecutive"?1:2;const n=R.pick([3,4,5]);let a=R.int(4,40);if(kind==="consecutive even"&&a%2)a++;if(kind==="consecutive odd"&&a%2===0)a++;const sum=n*a+step*n*(n-1)/2;const big=a+step*(n-1);const m=mcFrom(R,big,[a,big-step,big+step,sum/n],x=>fmtN(x));
  return{k:"mc",p:`The sum of ${n} ${kind} integers is ${sum}. What is the largest of these integers?`,...m,ex:`The average is ${sum} ÷ ${n} = ${fmtN(sum/n)}, which sits in the middle of the list. The integers are ${Array.from({length:n},(_,i)=>a+i*step).join(", ")}, so the largest is ${big}.`}}},
{n:"inverse",t:"Algebra",d:2,f:R=>{const x1=R.int(2,6),y1=R.int(2,12)*R.pick([1,2]);const c=x1*y1;const divs=[];for(let d=2;d<=c;d++)if(c%d===0&&d!==x1)divs.push(d);const x2=R.pick(divs);const y2=c/x2;const m=mcFrom(R,y2,[y1*x2/x1,y1,x2,c]);
  return{k:"mc",p:`${ix("y")} varies inversely with ${ix("x")}, and ${ix("y")} = ${y1} when ${ix("x")} = ${x1}. What is ${ix("y")} when ${ix("x")} = ${x2}?`,...m,ex:`Inverse variation means xy is constant: ${x1} × ${y1} = ${c}. So y = ${c} ÷ ${x2} = ${fmtN(y2)}.`}}},
{n:"func",t:"Algebra",d:2,f:R=>{const a=R.int(2,5),b=R.int(-6,6),c=R.int(-9,9),x=-R.int(1,4);const v=a*x*x+b*x+c;const m=mcFrom(R,v,[-a*x*x+b*x+c,a*x*x-b*x+c,a*x*x+b*x-c,v+a]);const bs=b===0?"":(b<0?` − ${-b}${ix("x")}`:` + ${b}${ix("x")}`);const cs=c===0?"":(c<0?` − ${-c}`:` + ${c}`);
  return{k:"mc",p:`If ${ix("f")}(${ix("x")}) = ${a}${ix("x")}<sup>2</sup>${bs}${cs}, what is ${ix("f")}(${fmtN(x)})?`,...m,ex:`Substitute carefully: ${a}(${fmtN(x)})² ${b<0?"−":"+"} ${Math.abs(b)}(${fmtN(x)}) ${c<0?"−":"+"} ${Math.abs(c)} = ${a*x*x} ${b*x<0?"−":"+"} ${Math.abs(b*x)} ${c<0?"−":"+"} ${Math.abs(c)} = ${fmtN(v)}.`}}},
{n:"median",t:"Data Analysis",d:1,f:R=>{const n=R.int(5,8);const arr=Array.from({length:n},()=>R.int(1,40));const s=arr.slice().sort((a,b)=>a-b);const med=n%2?s[(n-1)/2]:(s[n/2-1]+s[n/2])/2;
  return{k:"num",p:`What is the median of the list ${arr.join(", ")}?`,ans:med,ex:`Sorted: ${s.join(", ")}. ${n%2?`The middle value is ${med}.`:`With ${n} values, average the middle two: (${s[n/2-1]} + ${s[n/2]}) ÷ 2 = ${fmtN(med)}.`}`}}},
{n:"ratio",t:"Arithmetic",d:1,f:R=>{const a=R.int(1,7),b=R.int(1,7);if(a===b)return GENS[0].f(R);const tot=(a+b)*R.int(3,15);const who=R.pick(["boys","red marbles","adults","fiction books"]);const other={"boys":"girls","red marbles":"blue marbles","adults":"children","fiction books":"nonfiction books"}[who];
  return{k:"num",p:`The ratio of ${who} to ${other} in a group of ${tot} is ${a} : ${b}. How many ${who} are there?`,ans:tot*a/(a+b),ex:`There are ${a+b} parts, each worth ${tot} ÷ ${a+b} = ${tot/(a+b)}. ${who[0].toUpperCase()+who.slice(1)}: ${a} × ${tot/(a+b)} = ${tot*a/(a+b)}.`}}},
{n:"interest",t:"Arithmetic",d:1,f:R=>{const P=R.int(5,50)*100,r=R.int(2,8),t=R.int(2,6);
  return{k:"num",p:`How much simple interest, in dollars, does ${money(P)} earn in ${t} years at an annual rate of ${r}%?`,ans:P*r*t/100,ex:`I = Prt = ${P} × ${r/100} × ${t} = ${fmtN(P*r*t/100)}.`}}},
{n:"avgspeed",t:"Arithmetic",d:3,f:R=>{const [a,b,ans]=R.pick([[30,60,40],[40,60,48],[20,30,24],[60,90,72],[45,90,60],[30,70,42],[40,120,60],[36,45,40]]);const m=mcFrom(R,ans,[(a+b)/2,Math.sqrt(a*b),b-a,ans+5]);
  return{k:"mc",p:`A driver travels to a town at ${a} miles per hour and returns along the same road at ${b} miles per hour. What is the average speed, in miles per hour, for the round trip?`,...m,ex:`For equal distances, average speed = 2ab ÷ (a + b) = 2 × ${a} × ${b} ÷ ${a+b} = ${ans}. The simple average ${fmtN((a+b)/2)} is wrong because more time is spent at the slower speed.`}}},
{n:"factors",t:"Arithmetic",d:2,f:R=>{const N=R.pick([36,48,60,72,84,90,96,100,120,144,180]);const fs=[],nf=[];for(let d=3;d<=N/2;d++)(N%d===0?fs:nf).push(d);const opts=R.shuffle([...R.shuffle(fs).slice(0,R.int(2,4)),...R.shuffle(nf.filter(x=>x<=N/2)).slice(0,6)]).slice(0,6).sort((a,b)=>a-b);if(!opts.some(x=>N%x===0))opts[0]=fs[0];
  return{k:"multi",p:`Which of the following are factors of ${N}? <b>Indicate all such numbers.</b>`,o:opts.map(String),ans:opts.map((x,i)=>N%x===0?i:-1).filter(i=>i>=0),ex:`Divide ${N} by each choice. Those that divide evenly: ${opts.filter(x=>N%x===0).join(", ")}.`}}},
{n:"quadrange",t:"Algebra",d:3,f:R=>{const a=R.int(-3,5),b=a+R.int(1,3);const cands=R.shuffle([a-0.5,a,a+0.5,b-0.5,b,b+0.5,(a+b)/2,a+0.1]).filter((x,i,arr)=>arr.indexOf(x)===i).slice(0,5).sort((x,y)=>x-y);if(!cands.some(x=>x>a&&x<b))cands[2]=(a+b)/2;const sB=-(a+b),sC=a*b;
  const poly=`${ix("x")}<sup>2</sup> ${sB<0?"−":"+"} ${Math.abs(sB)}${ix("x")} ${sC<0?"−":"+"} ${Math.abs(sC)}`;
  return{k:"multi",p:`If ${poly} &lt; 0, which of the following could be the value of ${ix("x")}? <b>Indicate all such values.</b>`,o:cands.map(fmtN),ans:cands.map((x,i)=>x>a&&x<b?i:-1).filter(i=>i>=0),ex:`The expression factors as (x − ${fmtN(a)})(x − ${fmtN(b)}), which is negative only strictly between ${fmtN(a)} and ${fmtN(b)}. The endpoints give 0, not a negative number.`}}},
{n:"expo",t:"Algebra",d:2,f:R=>{const x=R.int(1,4),k=R.int(1,5);const base=R.pick([3,5]);const m=mcFrom(R,Math.pow(base,x),[Math.pow(base,x+1),base*x,Math.pow(base,x-1),Math.pow(base,k)]);
  return{k:"mc",p:`If 2<sup>${ix("x")} + ${k}</sup> = ${Math.pow(2,x+k)}, what is the value of ${base}<sup>${ix("x")}</sup>?`,...m,ex:`${Math.pow(2,x+k)} = 2<sup>${x+k}</sup>, so x + ${k} = ${x+k} and x = ${x}. Then ${base}^${x} = ${Math.pow(base,x)}.`}}},
{n:"sd",t:"Data Analysis",d:1,f:R=>{const mu=R.int(5,20)*5,sd=R.int(2,8),k=R.pick([1,1.5,2,2.5,3]);const below=R.chance(.6);const v=below?mu-k*sd:mu+k*sd;const m=mcFrom(R,v,[below?mu+k*sd:mu-k*sd,mu-sd,mu+sd,below?mu-k:mu+k]);
  return{k:"mc",p:`A data set has a mean of ${mu} and a standard deviation of ${sd}. Which value is exactly ${fmtN(k)} standard deviations ${below?"below":"above"} the mean?`,...m,ex:`${mu} ${below?"−":"+"} ${fmtN(k)} × ${sd} = ${fmtN(v)}.`}}},
{n:"inclexcl",t:"Arithmetic",d:3,f:R=>{const N=R.pick([60,100,120,150,200,250]);let a=R.pick([2,3,4,5,6,7]),b=R.pick([3,4,5,6,7,9]);if(a===b)b+=1;const l=a*b/gcd(a,b);const c=Math.floor(N/a)+Math.floor(N/b)-Math.floor(N/l);const m=mcFrom(R,c,[Math.floor(N/a)+Math.floor(N/b),c-1,c+1,N-c]);
  return{k:"mc",p:`How many integers from 1 to ${N}, inclusive, are divisible by ${a} or by ${b}?`,...m,ex:`Multiples of ${a}: ${Math.floor(N/a)}. Multiples of ${b}: ${Math.floor(N/b)}. Multiples of both (every ${l}) were counted twice: ${Math.floor(N/l)}. Total = ${c}.`}}},
{n:"triratio",t:"Geometry",d:1,f:R=>{const r=R.pick([[1,2,3],[2,3,4],[1,1,2],[3,4,5],[1,2,2],[2,3,5],[4,5,6],[1,3,5],[2,2,5]]);const s=r[0]+r[1]+r[2];const u=180/s;const big=R.chance(.6);const v=(big?r[2]:r[0])*u;const m=mcFrom(R,v,[r[1]*u,(big?r[0]:r[2])*u,u,v+10],x=>fmtN(x)+"°");
  return{k:"mc",p:`The angles of a triangle are in the ratio ${r.join(" : ")}. What is the measure of the ${big?"largest":"smallest"} angle?`,...m,ex:`${s} parts = 180°, so each part is ${fmtN(u)}°. The ${big?"largest":"smallest"} angle is ${big?r[2]:r[0]} × ${fmtN(u)}° = ${fmtN(v)}°.`}}},
{n:"slope",t:"Geometry",d:2,f:R=>{const m0=R.pick([-3,-2,-1,1,2,3,4]);const x1=R.int(-5,4),y1=R.int(-6,6),dx=R.int(1,4);const x2=x1+dx,y2=y1+m0*dx;const mm=mcFrom(R,m0,[-m0,1/m0,dx,m0+1]);
  return{k:"mc",p:`What is the slope of the line that passes through (${fmtN(x1)}, ${fmtN(y1)}) and (${fmtN(x2)}, ${fmtN(y2)})?`,...mm,ex:`Slope = (${fmtN(y2)} − ${fmtN(y1)}) ÷ (${fmtN(x2)} − ${fmtN(x1)}) = ${fmtN(m0*dx)} ÷ ${dx} = ${fmtN(m0)}.`}}},
{n:"venn",t:"Data Analysis",d:2,f:R=>{const T=R.int(8,20)*10;const both=R.int(5,20);const A=both+R.int(10,40),B=both+R.int(10,40);const nei=T-(A+B-both);if(nei<0)return GENS.find(g=>g.n==="median").f(R);const [x,y]=R.pick([["study French","study Spanish"],["play soccer","play basketball"],["read the newspaper","listen to the radio"]]);
  return{k:"num",p:`Of ${T} students surveyed, ${A} ${x}, ${B} ${y}, and ${both} do both. How many students do neither?`,ans:nei,ex:`Students doing at least one = ${A} + ${B} − ${both} = ${A+B-both}. Neither = ${T} − ${A+B-both} = ${nei}.`}}},
{n:"wavg",t:"Data Analysis",d:3,f:R=>{let n1,n2,a1,a2,tries=0;do{n1=R.int(2,12);n2=R.int(2,12);a1=R.int(60,80);a2=R.int(81,98);tries++}while(((n1*a1+n2*a2)%(n1+n2))!==0&&tries<200);const v=(n1*a1+n2*a2)/(n1+n2);
  return{k:"num",p:`In a class, ${n1} students averaged ${a1} on a test and the other ${n2} students averaged ${a2}. What was the average score for the whole class? (Give an exact answer.)`,ans:+v.toFixed(4),ex:`Total points = ${n1} × ${a1} + ${n2} × ${a2} = ${n1*a1+n2*a2}. Divide by ${n1+n2} students: ${fmtN(v)}. The simple average of ${a1} and ${a2} ignores group sizes.`}}},
{n:"arith",t:"Algebra",d:1,f:R=>{const a=R.int(-10,15),d=R.pick([-4,-3,-2,2,3,4,5,6,7]),n=R.int(8,40);
  return{k:"num",p:`In an arithmetic sequence, the first term is ${fmtN(a)} and each term is ${d>0?d+" more":(-d)+" less"} than the term before. What is the ${n}th term?`,ans:a+(n-1)*d,ex:`a<sub>n</sub> = a<sub>1</sub> + (n − 1)d = ${fmtN(a)} + ${n-1} × ${fmtN(d)} = ${fmtN(a+(n-1)*d)}.`}}},
{n:"pctofpct",t:"Arithmetic",d:1,f:R=>{const p=R.pick([10,20,25,40,50,75]),q=R.pick([10,20,25,40,50,60]),N=R.int(1,10)*400;
  return{k:"num",p:`What is ${p}% of ${q}% of ${N}?`,ans:p*q*N/10000,ex:`${q}% of ${N} = ${q*N/100}. ${p}% of that = ${fmtN(p*q*N/10000)}.`}}},
{n:"absval",t:"Algebra",d:2,f:R=>{const v=R.int(0,2);
  if(v===0)return qc(`${ix("x")} &lt; 0`,`|${ix("x")}|`,ix("x"),0,"For negative x, |x| is positive while x is negative, so A is greater.");
  if(v===1)return qc(`${ix("x")} ≠ 0`,`|${ix("x")}|`,`−${ix("x")}`,3,"If x is negative, |x| = −x (equal). If x is positive, |x| > −x. It cannot be determined.");
  return qc(`${ix("x")} &gt; 0`,`|${ix("x")}|`,ix("x"),2,"For positive x, |x| = x.")}},
{n:"fraccmp",t:"Arithmetic",d:1,f:R=>{let a,b,c,d;do{a=R.int(2,15);b=R.int(a+1,20);c=R.int(2,15);d=R.int(c+1,20)}while(a*d===b*c);
  return qc("",`${a}/${b}`,`${c}/${d}`,a*d>b*c?0:1,`Cross-multiply: ${a} × ${d} = ${a*d} and ${c} × ${b} = ${b*c}. ${a*d>b*c?"A":"B"} is greater.`)}},
{n:"powcmp",t:"Algebra",d:3,f:R=>{const n=R.int(5,30);const v=R.int(0,2);
  if(v===0)return qc("",`2<sup>${n+1}</sup>`,`2<sup>${n}</sup> + 2<sup>${n}</sup>`,2,`2ⁿ + 2ⁿ = 2 × 2ⁿ = 2ⁿ⁺¹, so the quantities are equal.`);
  if(v===1)return qc("",`3<sup>${n}</sup> + 3<sup>${n}</sup> + 3<sup>${n}</sup>`,`3<sup>${n+1}</sup>`,2,`Three copies of 3ⁿ is 3 × 3ⁿ = 3ⁿ⁺¹.`);
  return qc("",`2<sup>${n+2}</sup>`,`3 × 2<sup>${n}</sup>`,0,`2ⁿ⁺² = 4 × 2ⁿ, which is greater than 3 × 2ⁿ.`)}},
{n:"cylinder",t:"Geometry",d:2,f:R=>{const r=R.int(2,6),h=R.int(3,12);const pf=x=>fmtN(x)+"π";const m=mcFrom(R,r*r*h,[2*r*h,r*h,2*r*r*h,r*r*h/3],pf);
  return{k:"mc",p:`A right circular cylinder has radius ${r} and height ${h}. What is its volume?`,...m,ex:`V = πr²h = π × ${r*r} × ${h} = ${r*r*h}π.`}}},
{n:"di",set:true,t:"Data Analysis",d:2,f:R=>{const ctx=R.pick([{title:"Enrollment by department",unit:"students",cats:["Biology","Chemistry","Economics","History","Physics","Nursing"]},{title:"Units sold by region",unit:"units",cats:["North","South","East","West","Central","Coastal"]},{title:"Museum visitors",unit:"visitors (hundreds)",cats:["Art","Science","History","Maritime","Natural History","Design"]},{title:"Clinic appointments by type",unit:"appointments",cats:["Dental","Vision","Pediatric","Physical therapy","Cardiology","Dermatology"]}]);
  const y1=R.int(2016,2022),y2=y1+1+R.int(0,2);let rows,maxP,tries=0;
  do{rows=R.shuffle(ctx.cats).slice(0,4).map(c=>{const a=R.int(4,25)*20;const p=R.pick([-20,-10,-5,5,10,15,20,25,30,40,50]);return{c,a,b:a*(100+p)/100,p}});maxP=Math.max(...rows.map(r=>r.p));tries++}while(rows.filter(r=>r.p===maxP).length>1&&tries<50);
  const tot2=rows.reduce((s,r)=>s+r.b,0);const r0=rows[R.int(0,3)],r1=rows[R.int(0,3)];const share=r1.b/tot2*100;const sh=Math.round(share);
  const table=`<p><b>${ctx.title}, ${y1} and ${y2}</b> (${ctx.unit})</p><table class="dtable"><thead><tr><th>Category</th><th>${y1}</th><th>${y2}</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.c}</td><td>${r.a}</td><td>${r.b}</td></tr>`).join("")}</tbody></table><p style="font-size:13px">Questions refer to the table above.</p>`;
  const best=rows.find(r=>r.p===maxP);
  const m3=mcFrom(R,sh,[Math.round(r1.a/rows.reduce((s,r)=>s+r.a,0)*100),sh+5,sh-5,sh+10,sh-10],x=>x+"%");
  return{passage:{title:"Data interpretation",text:table},qs:[
   {k:"num",p:`By what percent did the number for ${r0.c} change from ${y1} to ${y2}? (Enter a negative number for a decrease.)`,ans:r0.p,unit:"%",ex:`(${r0.b} − ${r0.a}) ÷ ${r0.a} × 100 = ${r0.p}%.`},
   {k:"mc",p:`Which category had the greatest percent increase from ${y1} to ${y2}?`,o:rows.map(r=>r.c),ans:rows.indexOf(best),ex:`Percent changes: ${rows.map(r=>r.c+" "+r.p+"%").join(", ")}. The largest is ${best.c}. A big absolute increase is not always the biggest percent increase.`},
   {k:"mc",p:`In ${y2}, ${r1.c} accounted for approximately what percent of the total for all four categories?`,...m3,ex:`Total in ${y2} = ${tot2}. ${r1.b} ÷ ${tot2} ≈ ${fmtN(+share.toFixed(1))}%, closest to ${sh}%.`}
  ]}}}
];
function makeGen(g,key){
  const h=seedOf(key);const R=mkR(h);let res;try{res=g.f(R)}catch(e){return[]}
  const base="g-"+g.n+"-"+h.toString(36);
  if(g.set){const pid=base;return res.qs.map((q,i)=>Object.assign({id:base+"-"+i,s:"quant",t:g.t,d:g.d,pid,passage:res.passage,gen:true},q))}
  return[Object.assign({id:base,s:"quant",t:g.t,d:g.d,gen:true},res)];
}
function genQuant(key,n,target,withDI){
  const R=mkR(seedOf(key));const out=[];
  if(withDI&&n>=8)out.push(...makeGen(GENS.find(g=>g.n==="di"),key+"|di"));
  const singles=GENS.filter(g=>!g.set);
  const ranked=singles.map(g=>({g,s:(target?Math.abs(g.d-target):0)+R.f()*1.6})).sort((a,b)=>a.s-b.s).map(x=>x.g);
  let i=0;while(out.length<n&&i<200){out.push(...makeGen(ranked[i%ranked.length],key+"|"+i));i++}
  const list=out.slice(0,n);
  // Like the real test: comparison questions first, then the rest with the data set kept together
  const qcs=list.filter(q=>q.k==="qc"),di=list.filter(q=>q.pid),rest=list.filter(q=>q.k!=="qc"&&!q.pid);
  const mid=Math.floor(rest.length/2);return[...qcs,...rest.slice(0,mid),...di,...rest.slice(mid)];
}

/* ============================== STATE ============================== */
const S={view:"dashboard",db:null,user:null,sample:null,assets:null,uid:null,isOwner:false,me:null,ready:false,
  prog:null,myReq:undefined,grant:undefined,catalog:null,requests:[],grants:{},results:{},board:[],profiles:{},reports:[],myReports:[],
  session:null,lastResult:null,exam:null,setup:{sec:"mixed",topics:[],diff:0,count:20,timed:true,mistakes:false},
  calc:{open:false,tok:[],mem:0,fresh:false,note:""},vocab:{mode:"cards",i:0,flip:false,quiz:null},
  essay:{pid:null,text:"",start:null,dur:1800,result:null,busy:false},tutor:{},adminTab:"requests",libMsg:"",saving:null,writeBlocked:false,
  ai:{state:"idle",bank:[],lastGen:null,msg:""},reportOpen:null,room:null,peers:[],threads:[],myThread:null,msgs:[],openThread:null,cal:{month:null,sel:null}};
function defaultProg(){return{v:2,xp:0,streak:0,lastDay:null,daily:{},topic:{},diff:{quant:{},verbal:{}},attempts:[],errors:[],errQ:{},seen:[],vocab:{},essays:[],mocks:[],tasks:{},d40:{},aiOptIn:false,cal:{},calDays:[1,2,3,4,5,6],profile:{alias:"",testDate:"",targetQ:160,targetV:155,hours:10}}}
function lsGet(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function normProg(p){const d=defaultProg();p=Object.assign(d,p||{});p.profile=Object.assign(defaultProg().profile,p.profile||{});if(!Array.isArray(p.calDays))p.calDays=[1,2,3,4,5,6];["errQ","d40","tasks","vocab","daily","topic","cal"].forEach(k=>{if(!p[k]||typeof p[k]!=="object")p[k]={}});["seen","errors","attempts","essays","mocks"].forEach(k=>{if(!Array.isArray(p[k]))p[k]=[]});if(!p.diff)p.diff={quant:{},verbal:{}};return p}
S.prog=normProg(lsGet("alfredo.prog"));
let deviceId=lsGet("alfredo.device");if(!deviceId){deviceId="d"+Math.random().toString(36).slice(2,10);lsSet("alfredo.device",deviceId)}
const studentKey=()=>S.uid||deviceId;

/* ============================== HELPERS ============================== */
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const dayKey=(d=new Date())=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const fmt=s=>{s=Math.max(0,Math.round(s));return Math.floor(s/60)+":"+String(s%60).padStart(2,"0")};
const fmtH=s=>{s=Math.max(0,Math.round(s));return Math.floor(s/3600)+":"+String(Math.floor(s%3600/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")};
const pct=(c,t)=>t?Math.round(c/t*100):0;
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const fmtDate=ms=>ms?new Date(ms).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}):"—";
function toast(msg){const h=$("#toastHost");h.innerHTML=`<div class="toast" role="status">${esc(msg)}</div>`;clearTimeout(toast.t);toast.t=setTimeout(()=>h.innerHTML="",2800)}
function strip(h){const d=document.createElement("div");d.innerHTML=h;return d.textContent}
const passageOf=q=>q.passage||(q.pid&&PASSAGES[q.pid])||null;

/* ============================== QUESTION POOLS ============================== */
let todayCache={day:null,key:null,pool:[]};
function todayQuantPool(){const day=dayKey(),key=studentKey();if(todayCache.day!==day||todayCache.key!==key){const pool=[];GENS.forEach((g,i)=>{for(let j=0;j<2;j++)pool.push(...makeGen(g,`${key}|${day}|pool|${g.n}|${j}`))});todayCache={day,key,pool}}return todayCache.pool}
function allQuant(){return[...todayQuantPool(),...QUESTIONS.filter(q=>q.s==="quant")]}
function allVerbal(){return[...S.ai.bank,...QUESTIONS.filter(q=>q.s==="verbal")]}
function qById(id){return QUESTIONS.find(q=>q.id===id)||S.ai.bank.find(q=>q.id===id)||S.prog.errQ[id]||todayQuantPool().find(q=>q.id===id)||(S.lastResult&&S.lastResult.items&&(S.lastResult.items.find(i=>i.q.id===id)||{}).q)||null}
function groupUnits(list){const units=[],map={};list.forEach(q=>{if(q.pid){if(!map[q.pid]){map[q.pid]=[];units.push(map[q.pid])}map[q.pid].push(q)}else units.push([q])});return units}
function pickVerbal(n,target,R,used){
  const seen=new Set(S.prog.seen);const all=allVerbal().filter(q=>!used.has(q.id));
  const today=dayKey();const score=q=>(seen.has(q.id)?8:0)+(target?Math.abs(q.d-target):0)+(q.ai&&q.day===today?-2:0)+R.f()*1.8;
  const groups=groupUnits(all.filter(q=>q.pid)).map(g=>({g,s:g.reduce((a,q)=>a+score(q),0)/g.length})).sort((a,b)=>a.s-b.s).map(x=>x.g);
  const singles=all.filter(q=>!q.pid).map(q=>({q,s:score(q)})).sort((a,b)=>a.s-b.s).map(x=>x.q);
  const rc=[],rcTarget=Math.round(n*0.45);
  for(const g of groups){if(rc.length>=rcTarget)break;if(rc.length+g.length<=rcTarget+1)rc.push(g)}
  const rcCount=rc.reduce((a,g)=>a+g.length,0);
  const tc=[],se=[];for(const q of singles){if(tc.length+se.length>=n-rcCount)break;(q.t==="Text Completion"?tc:se).push(q)}
  let out=[...tc.sort((a,b)=>(a.blanks?a.blanks.length:1)-(b.blanks?b.blanks.length:1)),...(rc[0]||[]),...se,...rc.slice(1).flat()];
  for(const g of groups){if(out.length>=n)break;if(out.includes(g[0]))continue;out.push(...g.slice(0,n-out.length))}
  return out.slice(0,n);
}
function markSeen(qs){const p=S.prog;const set=new Set(p.seen);qs.forEach(q=>{if(!q.gen)set.add(q.id)});p.seen=[...set].slice(-900)}
function dailyMix(){
  const key=studentKey(),day=dayKey();const R=mkR(seedOf(key+"|"+day+"|mix"));
  const quant=genQuant(key+"|"+day+"|daily",20,0,true);
  const verbal=pickVerbal(20,0,mkR(seedOf(key+"|"+day+"|dv")),new Set());
  const units=R.shuffle([...groupUnits(quant),...groupUnits(verbal)]);return units.flat();
}

/* ============================== PERSISTENCE ============================== */
let saveTimer=null;
function saveProg(){lsSet("alfredo.prog",S.prog);clearTimeout(saveTimer);saveTimer=setTimeout(pushProg,900)}
async function pushProg(){
  if(!S.db||!S.uid||S.writeBlocked)return;
  if(S.saving){S.saving.then(()=>pushProg());return}
  const p=S.prog;
  S.saving=(async()=>{
    try{
      let body=JSON.parse(JSON.stringify(p));
      if(JSON.stringify(body).length>230000){body.errQ={};body.seen=body.seen.slice(-300);body.essays=body.essays.map(e=>Object.assign({},e,{text:""}))}
      await S.db.doc("results/"+S.uid).set(body);
      const st=overall(p);
      await S.db.doc("board/"+S.uid).set({xp:p.xp,acc:st.acc,n:st.t,streak:p.streak,alias:(p.profile.alias||"").slice(0,40),at:Date.now()});
    }catch(e){if(e&&e.code==="invalid_argument"){S.writeBlocked=true;renderWho()}}
    finally{S.saving=null}
  })();
}
function overall(p){let c=0,t=0;Object.values(p.topic).forEach(x=>{c+=x.c;t+=x.t});return{c,t,acc:pct(c,t)}}
function estScore(p,sec){const W={1:.6,2:1,3:1.4};let num=0,den=0,n=0;Object.entries((p.diff||{})[sec]||{}).forEach(([d,x])=>{num+=x.c*(W[d]||1);den+=x.t*1.4;n+=x.t});if(n<8)return null;return Math.round(130+40*Math.min(1,num/den))}
function touchStreak(){const p=S.prog,today=dayKey();if(p.lastDay===today)return;const y=new Date();y.setDate(y.getDate()-1);p.streak=(p.lastDay===dayKey(y))?p.streak+1:1;p.lastDay=today}
function doneTask(k){const t=dayKey();const tk=S.prog.tasks[t]||(S.prog.tasks[t]={});tk[k]=true}

/* ============================== AI DAILY VERBAL ============================== */
async function loadAiBank(){
  const local=lsGet("alfredo.aibank."+studentKey());if(local&&Array.isArray(local.items)){S.ai.bank=local.items;S.ai.lastGen=local.lastGen}
  if(S.db&&S.uid){try{const s=await S.db.doc("data/users/"+S.uid+"/aibank").get();if(s.exists){const d=s.data();if(Array.isArray(d.items)&&(d.items.length>=S.ai.bank.length)){S.ai.bank=JSON.parse(JSON.stringify(d.items));S.ai.lastGen=d.lastGen}}}catch(e){}}
}
async function saveAiBank(){
  let items=S.ai.bank.slice(-160);while(JSON.stringify(items).length>220000)items=items.slice(10);S.ai.bank=items;
  const body={items,lastGen:S.ai.lastGen};lsSet("alfredo.aibank."+studentKey(),body);
  if(S.db&&S.uid&&!S.writeBlocked){try{await S.db.doc("data/users/"+S.uid+"/aibank").set(JSON.parse(JSON.stringify(body)))}catch(e){}}
}
function validTC(it){return typeof it.stem==="string"&&Array.isArray(it.blanks)&&it.blanks.length>=1&&it.blanks.length<=3&&it.blanks.every(c=>Array.isArray(c)&&c.length===(it.blanks.length===1?5:3)&&c.every(w=>typeof w==="string"&&w.length<40))&&Array.isArray(it.answer)&&it.answer.length===it.blanks.length&&it.answer.every((a,i)=>Number.isInteger(a)&&a>=0&&a<it.blanks[i].length)&&(it.stem.match(/\((i+)\)___/g)||[]).length===it.blanks.length}
function validSE(it){return typeof it.stem==="string"&&it.stem.includes("______")&&Array.isArray(it.options)&&it.options.length===6&&Array.isArray(it.answer)&&it.answer.length===2&&it.answer[0]!==it.answer[1]&&it.answer.every(a=>Number.isInteger(a)&&a>=0&&a<6)}
function validRC(it){return typeof it.prompt==="string"&&Array.isArray(it.options)&&((it.type==="mc"&&it.options.length===5&&Number.isInteger(it.answer)&&it.answer>=0&&it.answer<5)||(it.type==="multi"&&it.options.length===3&&Array.isArray(it.answer)&&it.answer.length>=1&&it.answer.every(a=>Number.isInteger(a)&&a>=0&&a<3)))}
function shuffleMap(R,arr,ans){const idx=R.shuffle(arr.map((_,i)=>i));const o=idx.map(i=>arr[i]);const mapA=a=>idx.indexOf(a);return{o,ans:Array.isArray(ans)?ans.map(mapA).sort((a,b)=>a-b):mapA(ans)}}
function escT(s){return esc(String(s||"").slice(0,1200))}
async function generateAiBatch(tag){
  const key=studentKey(),day=dayKey();const salt=tag+"|"+Date.now().toString(36);const R=mkR(seedOf(key+"|"+day+"|"+salt));
  const words=R.shuffle(VOCAB).slice(0,10).map(w=>w[0]);const themes=R.shuffle(THEMES).slice(0,3);
  const prompt=`You write original GRE Verbal Reasoning practice questions. Variation code: ${seedOf(key+salt).toString(36)}. Make every item new; do not reuse well-known published questions.
Write exactly 10 sentence-level items and 1 reading passage set, at a realistic GRE level, mixing easy, medium and hard.
- 3 single-blank Text Completions: "type":"tc", stem marks the blank as (i)___, "blanks": [[5 single words or short phrases]], "answer":[index].
- 2 two-blank Text Completions: blanks marked (i)___ and (ii)___, "blanks": [[3 options],[3 options]], "answer":[i,j].
- 1 three-blank Text Completion: (i)___ (ii)___ (iii)___, three columns of 3 options, "answer":[i,j,k].
- 4 Sentence Equivalence: "type":"se", stem with one blank written ______, "options": 6 words, "answer": [two indexes] — the two answers must be near-synonyms that give sentences alike in meaning, and no other pair may work.
Use some of these words as correct answers or distractors: ${words.join(", ")}.
- 1 passage of 170–240 words on ${themes[0]} written in a scholarly register, with 3 questions: two "type":"mc" with 5 options and integer "answer", one "type":"multi" ("Select all that apply") with exactly 3 options and an "answer" array.
Every item needs "difficulty" (1, 2 or 3) and a short "explanation" (1–2 sentences) citing the clue. Only one defensible answer per item.
Return only JSON: {"items":[{"type":"tc","stem":"","blanks":[[""]],"answer":[0],"difficulty":2,"explanation":""},{"type":"se","stem":"","options":[""],"answer":[0,1],"difficulty":2,"explanation":""}],"passage":{"title":"","paragraphs":["",""],"questions":[{"type":"mc","prompt":"","options":[""],"answer":0,"difficulty":2,"explanation":""}]}}`;
  const raw=await S.sample.json(prompt,{modelTier:"default"});
  const out=[];const base="ai-"+day+"-"+seedOf(key+salt).toString(36);
  (raw&&Array.isArray(raw.items)?raw.items:[]).forEach((it,i)=>{
    const d=[1,2,3].includes(it.difficulty)?it.difficulty:2;const ex=String(it.explanation||"").slice(0,400);
    if(it.type==="tc"&&validTC(it)){const cols=it.blanks.map((c,b)=>shuffleMap(R,c,it.answer[b]));out.push({id:base+"-"+i,s:"verbal",t:"Text Completion",k:"tc",d,p:escT(it.stem),blanks:cols.map(c=>c.o.map(escT)),ans:cols.map(c=>c.ans),ex,ai:true,day})}
    else if(it.type==="se"&&validSE(it)){const m=shuffleMap(R,it.options,it.answer);out.push({id:base+"-"+i,s:"verbal",t:"Sentence Equivalence",k:"se",d,p:escT(it.stem),o:m.o.map(escT),ans:m.ans,ex,ai:true,day})}
  });
  const ps=raw&&raw.passage;
  if(ps&&Array.isArray(ps.paragraphs)&&ps.paragraphs.length&&Array.isArray(ps.questions)){
    const pid=base+"-p";const passage={title:"Passage · "+String(ps.title||themes[0]).slice(0,60),text:ps.paragraphs.slice(0,4).map(x=>"<p>"+escT(x)+"</p>").join("")};
    ps.questions.filter(validRC).slice(0,4).forEach((it,i)=>{const m=shuffleMap(R,it.options,it.answer);out.push({id:pid+i,s:"verbal",t:"Reading Comprehension",k:it.type,d:[1,2,3].includes(it.difficulty)?it.difficulty:2,pid,passage,p:escT(it.prompt)+(it.type==="multi"?" <b>Select all that apply.</b>":""),o:m.o.map(escT),ans:m.ans,ex:String(it.explanation||"").slice(0,400),ai:true,day})});
  }
  if(!out.length)throw new Error("empty");
  // Independent check: a second pass answers each item without the key; disagreements are dropped
  try{
    const quiz=out.map((q,i)=>{const pas=q.passage?"PASSAGE: "+strip(q.passage.text)+"\n":"";const body=q.k==="tc"?q.blanks.map((c,b)=>`Blank ${b+1}: `+c.map((w,j)=>j+"="+strip(w)).join(", ")).join(" | "):q.o.map((w,j)=>j+"="+strip(w)).join(", ");
      return `#${i} [${q.k==="tc"?"text completion: one option per blank":q.k==="se"?"sentence equivalence: pick exactly two":q.k==="multi"?"select all that apply":"pick one"}]\n${pas}${strip(q.p)}\nOptions: ${body}`}).join("\n\n");
    const chk=await S.sample.json(`Answer these GRE questions carefully. For text completion give one index per blank; for sentence equivalence give exactly two indexes; for select-all give every correct index; otherwise give one index.\n\n${quiz}\n\nReturn only JSON: {"answers":[[...indexes for #0],[...for #1]]} in order.`,{modelTier:"default"});
    if(chk&&Array.isArray(chk.answers)&&chk.answers.length===out.length){
      const norm=a=>(Array.isArray(a)?a:[a]).map(Number);
      const kept=out.filter((q,i)=>{const got=norm(chk.answers[i]);const want=Array.isArray(q.ans)?q.ans:[q.ans];return q.k==="tc"?want.every((x,b)=>got[b]===x)&&got.length===want.length:[...got].sort().join()===[...want].sort().join()});
      const rcKept=kept.filter(q=>q.pid);const pidCount={};rcKept.forEach(q=>pidCount[q.pid]=(pidCount[q.pid]||0)+1);
      return kept.filter(q=>!q.pid||pidCount[q.pid]>=2);
    }
  }catch(e){}
  return out;
}
async function ensureAi(force,tag){
  if(!S.sample){S.ai.state="off";return}
  const day=dayKey();
  if(!force&&S.ai.lastGen===day){S.ai.state="ready";return}
  if(S.ai.state==="loading")return;
  S.ai.state="loading";S.ai.msg="";renderIfDash();
  try{const items=await generateAiBatch(tag||"daily");S.ai.bank=[...S.ai.bank.filter(q=>!items.some(n=>n.id===q.id)),...items];S.ai.lastGen=day;S.ai.state="ready";S.ai.msg=`${items.length} new verbal questions written for you`;S.prog.aiOptIn=true;saveProg();await saveAiBank()}
  catch(e){S.ai.state="error";S.ai.msg=e&&e.code==="not_granted"?"AI question writing wasn't allowed. Your questions come from the bank instead.":e&&e.code==="rate_limited"?"AI is busy. Try again in a few minutes.":"Couldn't write new questions right now."}
  renderIfDash();
}
function renderIfDash(){if(["dashboard","practice"].includes(S.view)&&!S.session)render()}
const aiTodayCount=()=>S.ai.bank.filter(q=>q.day===dayKey()).length;

/* ============================== PLATFORM ============================== */
async function boot(){
  route();
  if(!window.claude||!window.claude.use){S.ready=true;S.ai.state="off";await loadAiBank();renderWho();render();return}
  const get=n=>window.claude.use(n).catch(()=>null);
  const [db,user,sample,assets,room]=await Promise.all([get("db"),get("user"),get("sample"),get("assets"),get("room")]);
  Object.assign(S,{db,user,sample,assets,room});
  if(user){S.me=await user.me();S.uid=S.me.id;S.isOwner=S.me.isOwner}
  S.ready=true;todayCache.day=null;
  if(room){try{room.onPeers(ch=>{S.peers=ch.peers.filter(p=>p.kind==="viewer");resolveNames(S.peers.map(p=>p.by||(p.presence&&p.presence.uid)).filter(Boolean));updatePresenceUI()},()=>{});setPresence()}catch(e){}}
  if(db&&S.uid){
    try{const snap=await db.doc("results/"+S.uid).get();
      if(snap.exists){const remote=normProg(JSON.parse(JSON.stringify(snap.data())));const local=S.prog;
        S.prog=(local.xp||0)>(remote.xp||0)?local:remote;if(S.prog===local)saveProg();lsSet("alfredo.prog",S.prog)}
      else if(S.prog.xp>0)saveProg();
    }catch(e){}
    try{const r=await db.doc("reports/"+S.uid).get();if(r.exists)S.myReports=JSON.parse(JSON.stringify(r.data().items||[]))}catch(e){}
    subscribe();
  }
  await loadAiBank();
  if(!S.sample)S.ai.state="off";else if(S.ai.lastGen===dayKey())S.ai.state="ready";else if(S.prog.aiOptIn)ensureAi(false,"daily");
  renderWho();renderNav();render();
}
function subscribe(){
  const db=S.db,uid=S.uid;
  db.collection("board").onSnapshot(s=>{S.board=s.docs.map(d=>({id:d.id,...d.data()}));resolveNames(S.board.map(b=>b.id));rerenderIf(["dashboard"])},()=>{});
  if(S.isOwner){
    db.doc("catalog/main").onSnapshot(s=>{S.catalog=s.exists?(s.data().books||[]):[];rerenderIf(["library","admin"])},()=>{S.catalog=[]});
    db.collection("requests").onSnapshot(s=>{S.requests=s.docs.map(d=>({id:d.id,...d.data()}));resolveNames(S.requests.map(r=>r.id));renderNav();rerenderIf(["admin","library","dashboard"])},()=>{});
    db.collection("grants").onSnapshot(s=>{const g={};s.docs.forEach(d=>g[d.id]=d.data());S.grants=g;renderNav();rerenderIf(["admin","dashboard"])},()=>{});
    db.collection("results").onSnapshot(s=>{const r={};s.docs.forEach(d=>r[d.id]=d.data());S.results=r;resolveNames(Object.keys(r));rerenderIf(["admin"])},()=>{});
    db.collection("reports").onSnapshot(s=>{S.reports=s.docs.map(d=>({id:d.id,items:(d.data().items||[])}));renderNav();rerenderIf(["admin"])},()=>{});
  }else{
    db.doc("requests/"+uid).onSnapshot(s=>{S.myReq=s.exists?s.data():null;rerenderIf(["library","dashboard"])},()=>{S.myReq=null});
    db.doc("grants/"+uid).onSnapshot(s=>{S.grant=s.exists?s.data():null;rerenderIf(["library","dashboard"])},()=>{S.grant=null});
  }
  subscribeMessages();
  setTimeout(()=>{if(S.myReq===undefined)S.myReq=null;if(S.grant===undefined)S.grant=null;if(S.catalog===null&&S.isOwner)S.catalog=[];rerenderIf(["library"])},10000);
}
async function resolveNames(ids){if(!S.user||!ids.length)return;try{const ps=await S.user.profiles(ids);Object.assign(S.profiles,ps);rerenderIf(["dashboard","admin"])}catch(e){}}
function nameOf(id,fallback){const p=S.profiles[id];return (p&&p.name)||fallback||"Student"}
function rerenderIf(views){if(S.exam)return;const ae=document.activeElement;if(ae&&/INPUT|TEXTAREA|SELECT/.test(ae.tagName)&&$("#main").contains(ae))return;if(views.includes(S.view)&&!(S.view==="practice"&&S.session)&&!(S.view==="writing"&&S.essay.start))render()}

/* ============================== ROUTING / SHELL ============================== */
const VIEWS=[["dashboard","Dashboard","01"],["practice","Practice","02"],["mock","GRE Test","03"],["writing","Writing","04"],["vocab","Vocabulary","05"],["calendar","Study Calendar","06"],["tools","Study Tools","07"],["messages","Messages","08"],["library","Library","09"]];
function route(){const h=(location.hash||"").slice(1);const ok=VIEWS.map(v=>v[0]).concat(["admin"]);S.view=ok.includes(h)?h:"dashboard";renderNav();render();setPresence()}
window.addEventListener("hashchange",route);
function go(v){if(location.hash!=="#"+v)location.hash=v;else route();window.scrollTo(0,0)}
function reqStatus(r){const g=S.grants[r.id];if(!g)return "pending";if(g.status==="approved")return "approved";return (r.at||0)>(g.at||0)?"pending":g.status}
function pendingCount(){return S.requests.filter(r=>reqStatus(r)==="pending").length}
function reportCount(){return S.reports.reduce((a,r)=>a+r.items.length,0)}
function renderNav(){
  const items=VIEWS.slice();if(S.isOwner)items.push(["admin","Admin Desk","10"]);
  const badge=k=>k==="admin"&&(pendingCount()+reportCount())?`<span class="badge">${pendingCount()+reportCount()}</span>`:k==="messages"&&unreadCount()?`<span class="badge">${unreadCount()}</span>`:"";
  $("#nav").innerHTML=items.map(([k,l,n])=>`<a data-act="nav" data-v="${k}" class="${S.view===k?"on":""}" href="#${k}"><span class="tab">${n}</span>${l}${badge(k)}</a>`).join("");
}
function renderWho(){
  const w=$("#who");if(!w)return;
  if(!S.ready){w.innerHTML=`<span class="muted">Connecting…</span>`;return}
  if(!S.me||!S.uid){w.innerHTML=`<span class="muted">Progress saves on this device only. Sign in to sync.</span>`;return}
  w.innerHTML=`<img src="${esc(S.me.avatarUrl)}" alt=""><div><b>${esc(S.prog.profile.alias||S.me.name||"You")}</b><div class="muted" style="font-size:11.5px">${S.isOwner?"Portal admin":S.writeBlocked?"View-only access":"Student"}</div></div>`;
}

/* ============================== RENDER ============================== */
function render(){
  const m=$("#main");if(!m)return;
  const fn={dashboard:vDashboard,practice:vPractice,mock:vMock,writing:vWriting,vocab:vVocab,tools:vTools,library:vLibrary,admin:vAdmin,calendar:vCalendar,messages:vMessages}[S.view]||vDashboard;
  m.innerHTML=fn();renderCalc();updatePresenceUI();
  if(S.view==="messages"){renderChatLog();markRead()}
  if(S.view==="writing"&&S.essay.start)tickEssay();
}

/* ---------- Dashboard ---------- */
function scaleHTML(est,target,label){
  const pos=v=>((v-130)/40*100).toFixed(1)+"%";
  const ticks=[130,140,150,160,170].map(v=>`<span class="tick" style="left:${pos(v)}">${v}</span>`).join("");
  return `<div class="stack" style="gap:4px"><div class="row" style="justify-content:space-between"><span class="eyebrow">${label}</span><span class="mono" style="font-size:20px;font-weight:600">${est??"—"}</span></div>
  <div class="scale"><div class="track"></div>${ticks}${target?`<span class="mk t" style="left:${pos(target)}" title="Target ${target}"></span>`:""}${est?`<span class="mk" style="left:${pos(est)}"></span>`:""}</div>
  <div class="muted" style="font-size:12px">${est?`Estimated from your practice · target ${target}`:`Answer 8+ ${label.toLowerCase()} questions to unlock an estimate · target ${target}`}</div></div>`;
}
function weakTopics(sec,n){const all=sec?TOPICS[sec]:[...TOPICS.quant,...TOPICS.verbal];return all.map(t=>{const x=S.prog.topic[t];return{t,a:x&&x.t?x.c/x.t:-1}}).sort((a,b)=>a.a-b.a).slice(0,n).map(x=>x.t)}
function todaysTasks(){
  const p=S.prog,wq=weakTopics("quant",1)[0],wv=weakTopics("verbal",1)[0];
  const lastFull=p.mocks.filter(m=>m.kind==="full").map(m=>m.at).sort().pop()||0;const needFull=Date.now()-lastFull>6*864e5;
  const t=[
    {k:"d40",l:"Today's 40 — fresh mixed set",s:"20 Quant + 20 Verbal, new for you today",act:"daily40"},
    {k:"q20",l:`20 Quant questions on ${wq}`,s:"Your weakest Quant topic right now",act:"drill",arg:wq},
    {k:"v20",l:`20 Verbal questions on ${wv}`,s:"Your weakest Verbal topic right now",act:"drill",arg:wv},
    {k:"hard",l:"10 hard mixed questions",s:"Push your ceiling",act:"hard"},
    {k:"err",l:`Clear your error log (${p.errors.length})`,s:"Retry everything you've missed",act:"mistakes"},
    {k:"vocab",l:"Review 30 vocabulary cards",s:`${dueWords().length} due today`,act:"go",arg:"vocab"},
    {k:"essay",l:"Write one timed Issue essay",s:"30 minutes, scored 0–6",act:"go",arg:"writing"}];
  if(needFull)t.push({k:"full",l:"Take a full-length GRE test",s:"Recommended once a week",act:"go",arg:"mock"});
  return t;
}
function vDashboard(){
  const p=S.prog,o=overall(p),eq=estScore(p,"quant"),ev=estScore(p,"verbal");
  const days=p.profile.testDate?Math.ceil((new Date(p.profile.testDate+"T00:00")-new Date())/864e5):null;
  const today=dayKey(),tk=p.tasks[today]||{};const tasks=todaysTasks();const doneN=tasks.filter(t=>tk[t.k]).length;
  const spark=[];for(let i=13;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=dayKey(d);spark.push({k,n:p.daily[k]||0,today:i===0})}
  const mx=Math.max(4,...spark.map(s=>s.n));
  const greet=S.me&&S.me.name?S.me.name.split(" ")[0]:"there";
  const board=S.board.slice().sort((a,b)=>(b.xp||0)-(a.xp||0)).slice(0,8);
  const d40=p.d40[today];
  const aiLine=S.ai.state==="loading"?`<span class="pill wait">Writing</span> AI is writing today's verbal questions for you…`:S.ai.state==="ready"?`<span class="pill ok">AI</span> ${aiTodayCount()} verbal questions written only for you today`:S.ai.state==="error"?`<span class="pill no">AI</span> ${esc(S.ai.msg)} <button class="btn sm ghost" data-act="aiGen">Try again</button>`:S.sample?`<button class="btn sm gold" data-act="aiGen">Have AI write today's verbal questions</button>`:`<span class="muted">Verbal questions come from the question bank.</span>`;
  const mixDots=d40?`<div class="mix">${Array.from({length:d40.n},(_,i)=>`<i class="${i<d40.q?"q":"v"} done"></i>`).join("")}</div>`:`<div class="mix">${Array.from({length:40},(_,i)=>`<i class="${i%2?"v":"q"}"></i>`).join("")}</div>`;
  const libBanner=!S.isOwner&&S.uid&&S.db&&S.grant!==undefined&&!(S.grant&&S.grant.status==="approved")?`<div class="banner"><b>Library access</b><span>${S.myReq&&reqStatusSelf()==="pending"?"Your request is waiting for approval.":"Request access to the study library to read the books."}</span><a class="btn sm gold" href="#library" data-act="nav" data-v="library">Open library</a></div>`:"";
  return `
  <div class="head"><div><div class="eyebrow">Welcome back, ${esc(greet)} · ${new Date().toLocaleDateString(undefined,{weekday:"long",month:"long",day:"numeric"})}</div><h1>Your GRE desk</h1></div>
  <div class="row"><span id="onlineCount"></span><a class="btn ghost" href="#mock" data-act="nav" data-v="mock">Take a full GRE test</a></div></div>
  ${S.isOwner?ownerPanel():""}${libBanner}
  <div class="hero"><div class="l"><span class="eyebrow">Today's 40</span><h2>${d40?`Done today: ${d40.c} of ${d40.n} correct`:"A fresh 40-question mixed set, made for you"}</h2>
    <p class="muted">Quant numbers are generated for you alone and change every day, so no two students get the same set. Verbal mixes AI-written items with the bank, avoiding questions you've already seen.</p>
    ${mixDots}<div class="row" style="font-size:13px">${aiLine}</div>
    <div class="row"><button class="btn gold" data-act="daily40">${d40?"Take it again":"Start today's 40"}</button><span class="muted" style="font-size:12.5px">≈ ${Math.round((20*105+20*90)/60)} min at GRE pace · resets at midnight</span></div></div>
    <div class="r"><span class="eyebrow" style="color:inherit;opacity:.7">${days===null?"Test day":"Days to test day"}</span><span class="big mono">${days===null?"—":days<0?"Done":days}</span><span style="opacity:.8;font-size:13px">${days===null?"Set your test date in your study profile below.":"Streak "+(p.streak||0)+" days · "+p.xp+" XP"}</span></div></div>
  <div class="grid g4">
    <div class="sheet stat"><div class="n mono">${p.streak||0}</div><div class="l">day streak</div></div>
    <div class="sheet stat"><div class="n mono">${o.t}</div><div class="l">questions answered · ${o.acc}% correct</div></div>
    <div class="sheet stat"><div class="n mono">${p.errors.length}</div><div class="l">questions in your error log</div></div>
    <div class="sheet stat"><div class="n mono">${p.xp}</div><div class="l">XP earned</div></div>
  </div>
  <div class="grid g2">
    <div class="sheet stack"><div class="row" style="justify-content:space-between"><h2>Today's plan</h2><span class="mono muted" style="font-size:12.5px">${doneN}/${tasks.length} done</span></div>
      <div class="bar g"><i style="width:${pct(doneN,tasks.length)}%"></i></div>
      <div>${tasks.map(t=>`<div class="check ${tk[t.k]?"done":""}" data-act="task" data-k="${t.k}"><span class="bx">${tk[t.k]?"✓":""}</span><span class="tl">${esc(t.l)}<small>${esc(t.s)}</small></span><button class="btn sm ghost" data-act="${t.act}" data-arg="${esc(t.arg||"")}" data-v="${esc(t.arg||"")}">Go</button></div>`).join("")}</div>${calTodayHTML()}</div>
    <div class="sheet stack" style="gap:22px"><h2>Score outlook</h2>${scaleHTML(eq,p.profile.targetQ,"Quantitative")}${scaleHTML(ev,p.profile.targetV,"Verbal")}
      <div class="muted" style="font-size:12px">Scores run 130–170 per measure. These are rough practice estimates, not ETS scores.</div>
      <div class="stack" style="gap:6px"><div class="row" style="justify-content:space-between"><span class="eyebrow">Last 14 days</span><span class="muted" style="font-size:12px">questions per day</span></div><div class="spark">${spark.map(s=>`<i class="${s.today?"today":""}" style="height:${(s.n/mx*100).toFixed(0)}%" title="${s.k}: ${s.n}"></i>`).join("")}</div></div></div>
  </div>
  <div class="grid g2">
    <div class="sheet stack"><h2>Accuracy by topic</h2>
      ${["quant","verbal"].map(sec=>`<div class="eyebrow" style="margin-top:6px">${sec==="quant"?"Quantitative":"Verbal"}</div>`+TOPICS[sec].map(t=>{const x=p.topic[t]||{c:0,t:0},a=pct(x.c,x.t);return `<div class="stack" style="gap:4px"><div class="row" style="justify-content:space-between;font-size:13.5px"><span>${t}</span><span class="mono muted">${x.t?a+"% · "+x.c+"/"+x.t:"not started"}</span></div><div class="bar ${x.t?(a>=75?"g":a>=50?"w":"b"):""}"><i style="width:${x.t?a:0}%"></i></div></div>`}).join("")).join("")}
    </div>
    <div class="sheet stack"><h2>Leaderboard</h2>${board.length?`<div class="lb"><ol>${board.map((b,i)=>`<li><span class="mono muted" style="width:20px">${i+1}</span><img src="${esc((S.profiles[b.id]||{}).avatarUrl||"")}" alt=""><span style="flex:1">${esc(b.alias||nameOf(b.id))}${b.id===S.uid?" <span class='pill neu'>you</span>":""}</span><span class="mono">${b.xp||0} XP</span></li>`).join("")}</ol></div>`:`<div class="empty">Rankings appear once students start practicing. Every correct answer earns 10 XP.</div>`}</div>
  </div>
  <div class="sheet stack"><h2>Your study profile</h2>
    <div class="grid g4">
      <label class="f">Display name<input type="text" id="pf-alias" value="${esc(p.profile.alias)}" placeholder="${esc(S.me&&S.me.name||"Your name")}" maxlength="40"></label>
      <label class="f">Test date<input type="date" id="pf-date" value="${esc(p.profile.testDate)}"></label>
      <label class="f">Target Quant<input type="number" id="pf-q" min="130" max="170" value="${p.profile.targetQ}"></label>
      <label class="f">Target Verbal<input type="number" id="pf-v" min="130" max="170" value="${p.profile.targetV}"></label>
    </div>
    <div class="row"><button class="btn" data-act="saveProfile">Save profile</button><span class="muted" style="font-size:13px">${S.uid&&S.db&&!S.writeBlocked?"Saved to your account.":"Saved on this device."}</span></div>
  </div>
  ${p.attempts.length?`<div class="sheet stack"><h2>Recent sessions</h2><div class="tablebox"><table><thead><tr><th>Date</th><th>Mode</th><th>Section</th><th>Score</th><th>Time</th></tr></thead><tbody>${p.attempts.slice(-8).reverse().map(a=>`<tr><td>${fmtDate(a.at)}</td><td>${esc(a.mode)}</td><td>${esc(a.sec)}</td><td class="mono">${a.c}/${a.n} · ${pct(a.c,a.n)}%</td><td class="mono">${fmt(a.secs)}</td></tr>`).join("")}</tbody></table></div></div>`:""}`;
}

/* ---------- Practice ---------- */
function vPractice(){
  if(S.session)return vRunner();
  if(S.lastResult&&S.lastResult.mode==="practice")return vResults(S.lastResult);
  const st=S.setup,pool=buildPool(st);
  const tps=st.sec==="mixed"?[...TOPICS.quant,...TOPICS.verbal]:TOPICS[st.sec];
  const fresh=pool.filter(q=>q.gen||q.ai||!S.prog.seen.includes(q.id)).length;
  return `<div class="head"><div><div class="eyebrow">Section practice</div><h1>Build a practice set</h1><p>Sets are mixed by default and drawn from questions generated for you today, AI-written verbal items and the bank. Every answer is marked and explained.</p></div><button class="btn gold" data-act="daily40">Today's 40</button></div>
  <div class="grid g2">
  <div class="sheet stack" style="gap:18px">
    <div class="stack" style="gap:8px"><span class="eyebrow">Measure</span><div class="row">${[["mixed","Mixed"],["quant","Quantitative"],["verbal","Verbal"]].map(([k,l])=>`<button class="chip ${st.sec===k?"on":""}" data-act="setSec" data-v="${k}">${l}</button>`).join("")}</div></div>
    <div class="stack" style="gap:8px"><span class="eyebrow">Topics <span class="muted" style="text-transform:none;letter-spacing:0;font-weight:400">· none selected means all</span></span><div class="row">${tps.map(t=>`<button class="chip ${st.topics.includes(t)?"on":""}" data-act="setTopic" data-v="${t}">${t}</button>`).join("")}</div></div>
    <div class="stack" style="gap:8px"><span class="eyebrow">Difficulty</span><div class="row">${[[0,"Any"],[1,"Easy"],[2,"Medium"],[3,"Hard"]].map(([k,l])=>`<button class="chip ${st.diff===k?"on":""}" data-act="setDiff" data-v="${k}">${l}</button>`).join("")}</div></div>
    <div class="stack" style="gap:8px"><span class="eyebrow">Questions</span><div class="row">${[10,20,30,40].map(n=>`<button class="chip ${st.count===n?"on":""}" data-act="setCount" data-v="${n}">${n}</button>`).join("")}</div></div>
    <div class="row"><button class="chip ${st.timed?"on":""}" data-act="toggleTimed">${st.timed?"✓ ":""}Timed (GRE pace)</button><button class="chip ${st.mistakes?"on":""}" data-act="toggleMistakes">${st.mistakes?"✓ ":""}Error log only (${S.prog.errors.length})</button></div>
    <div class="row"><button class="btn gold" data-act="startPractice" ${pool.length?"":"disabled"}>Start ${Math.min(st.count,pool.length)} questions</button><span class="muted" style="font-size:13px">${pool.length} available · ${fresh} new to you</span></div>
  </div>
  <div class="sheet stack"><h2>Where questions come from</h2>
    <div class="stack" style="gap:10px;font-size:14px">
      <div><b>Quant:</b> ${GENS.length} question generators build new problems with fresh numbers for each student, every day. They cover arithmetic, algebra, geometry, data analysis, comparisons, select-all, numeric entry and data-interpretation tables. Answers are computed, so the key is always right.</div>
      <div><b>Verbal:</b> ${S.ai.bank.length} AI-written items in your personal bank (${aiTodayCount()} from today), checked by a second AI pass that answers them on its own. Plus ${QUESTIONS.filter(q=>q.s==="verbal").length} hand-written bank questions. Questions you've already seen are used last.</div>
      <div><b>Marking:</b> all-or-nothing, as on the real test. Misses go to your error log, then drop off once you get them right.</div>
      <div class="muted" style="font-size:13px">Keyboard: <span class="kbd">A</span>–<span class="kbd">E</span> choose · <span class="kbd">N</span> next · <span class="kbd">B</span> back · <span class="kbd">M</span> mark</div>
    </div>
  </div></div>`;
}
function buildPool(st){
  let pool=[...(st.sec!=="verbal"?allQuant():[]),...(st.sec!=="quant"?allVerbal():[])];
  if(st.topics.length)pool=pool.filter(q=>st.topics.includes(q.t));
  if(st.diff)pool=pool.filter(q=>q.d===st.diff);
  if(st.mistakes)pool=S.prog.errors.map(qById).filter(Boolean).filter(q=>(st.sec==="mixed"||q.s===st.sec));
  return pool;
}
function pickFrom(pool,n){
  const seen=new Set(S.prog.seen);const units=groupUnits(pool).map(u=>({u,s:(u.some(q=>seen.has(q.id))?5:0)+Math.random()*4})).sort((a,b)=>a.s-b.s).map(x=>x.u);
  const out=[];for(const u of units){if(out.length>=n)break;if(out.length+u.length>n+1)continue;out.push(...u)}
  return out;
}
function startSession(qs,opts){
  S.lastResult=null;
  S.session=Object.assign({qs,idx:0,ans:{},marked:[],start:Date.now(),qtime:{},qstart:Date.now(),review:false,showTimer:true,scratch:""},opts);
  startTimer();if(S.view!=="practice")go("practice");else render();window.scrollTo(0,0);
}
const secPerQ=q=>q.s==="quant"?105:90;
function startPractice(task){
  const st=S.setup;const pool=buildPool(st);let qs=st.mistakes?shuffle(pool).slice(0,st.count):pickFrom(pool,st.count);
  if(!qs.length){toast("No questions match those filters");return}
  qs=groupUnits(qs).flat();
  startSession(qs,{mode:"practice",task,label:st.mistakes?"Error log retry":st.sec==="quant"?"Quantitative Reasoning":st.sec==="verbal"?"Verbal Reasoning":"Mixed Practice",limit:st.timed?qs.reduce((a,q)=>a+secPerQ(q),0):0});
}
function startDaily(){const qs=dailyMix();startSession(qs,{mode:"practice",task:"d40",daily:true,label:"Today's 40 · Mixed",limit:qs.reduce((a,q)=>a+secPerQ(q),0)})}
let tickH=null;
function startTimer(){clearInterval(tickH);tickH=setInterval(()=>{const s=S.session;if(!s)return clearInterval(tickH);const el=$("#timer");if(!el)return;
  const used=(Date.now()-s.start)/1000;
  if(s.limit){const left=s.limit-used;el.textContent=s.showTimer?fmt(left):"Show time";el.classList.toggle("low",left<60&&s.showTimer);if(left<=0){toast("Time is up. Your set was submitted.");finishSection()}}
  else el.textContent=s.showTimer?fmt(used):"Show time"},500)}
function curQ(){if(S.exam){const sec=S.exam.sections[S.exam.cur];return sec&&sec.qs&&sec.phase==="q"?sec.qs[sec.idx]:null}const s=S.session;return s&&s.qs[s.idx]}
function stampTime(){const s=S.session;if(!s)return;const q=curQ();if(!q)return;s.qtime[q.id]=(s.qtime[q.id]||0)+(Date.now()-s.qstart)/1000;s.qstart=Date.now()}
function vRunner(){
  const s=S.session;
  if(s.review)return vReviewGrid();
  const q=curQ(),marked=s.marked.includes(q.id);
  const used=(Date.now()-s.start)/1000;const tm=s.limit?fmt(s.limit-used):fmt(used);
  const pas=passageOf(q);
  return `<div>
  <div class="runbar"><span class="sec">${esc(s.label)} · Question ${s.idx+1} of ${s.qs.length}</span><span class="sp"></span>
    <span class="timer mono" id="timer" data-act="toggleTime" style="cursor:pointer" title="Hide or show the timer">${s.showTimer?tm:"Show time"}</span>
    ${q.s==="quant"?`<button class="btn sm ${S.calc.open?"on":""}" data-act="calc">Calculator</button>`:""}
    <button class="btn sm ${marked?"on":""}" data-act="mark">${marked?"Marked":"Mark"}</button>
    <button class="btn sm" data-act="review">Review</button>
    <button class="btn sm" data-act="prev" ${s.idx===0?"disabled":""}>Back</button>
    <button class="btn sm on" data-act="next">${s.idx===s.qs.length-1?"Finish":"Next"}</button>
  </div>
  <div class="qbody ${pas?"split":""}">
    ${pas?`<div class="pane passage"><div class="eyebrow" style="font-family:var(--f-body);margin-bottom:10px">${esc(pas.title)}</div>${pas.text}</div>`:""}
    <div class="pane"><div class="row" style="margin-bottom:6px"><span class="pill neu">${esc(q.t)}</span>${q.ai?`<span class="pill wait">AI-written</span>`:q.gen?`<span class="pill ok">Fresh today</span>`:""}</div>${questionHTML(q,s.ans[q.id],null)}</div>
  </div>
  <details class="sheet" style="margin-top:14px"><summary style="cursor:pointer;font-weight:600">Scratch paper</summary><textarea id="scratch" rows="5" style="margin-top:10px" placeholder="Work it out here. This stays with the session.">${esc(s.scratch)}</textarea></details>
  <div class="row" style="margin-top:12px;justify-content:flex-end"><button class="btn sm danger" data-act="quit">End without saving</button></div>
  </div>`;
}
function dirFor(q){
  return {qc:"Compare Quantity A and Quantity B, using additional information centered above the two quantities if such information is given. Select one of the four answer choices.",mc:"Select one answer choice.",multi:"Select one or more answer choices.",num:"Enter your answer as an integer, decimal or fraction (e.g. 3/4).",tc:q.blanks&&q.blanks.length>1?"For each blank, select one entry from the corresponding column of choices. Fill all blanks in the way that best completes the text.":"Select one entry for the blank. Fill the blank in the way that best completes the text.",se:"Select the two answer choices that, when used to complete the sentence, fit the meaning of the sentence as a whole and produce completed sentences that are alike in meaning."}[q.k];
}
function questionHTML(q,a,review){
  const rv=!!review;let h=`<div class="qdir">${dirFor(q)}</div>`;
  const stem=q.k==="tc"?q.p.replace(/\((i+)\)___/g,(m,r)=>`<span class="gap">(${r})</span>`):q.p;
  if(stem)h+=`<div class="qstem">${stem}</div>`;
  const cls=(i,selected,isAns)=>rv?(isAns?"right":selected?"wrong":""):(selected?"sel":"");
  if(q.k==="qc"){h+=`<div class="qc"><div><b>Quantity A</b>${q.a}</div><div><b>Quantity B</b>${q.b}</div></div><div class="opts">${QC_OPTS.map((o,i)=>`<button class="opt ${cls(i,a===i,q.ans===i)}" ${rv?"disabled":`data-act="pick" data-i="${i}"`}><span class="bub">${LETTERS[i]}</span>${o}</button>`).join("")}</div>`}
  else if(q.k==="mc"){h+=`<div class="opts">${q.o.map((o,i)=>`<button class="opt ${cls(i,a===i,q.ans===i)}" ${rv?"disabled":`data-act="pick" data-i="${i}"`}><span class="bub">${LETTERS[i]}</span>${o}</button>`).join("")}</div>`}
  else if(q.k==="multi"||q.k==="se"){const sel=a||[];h+=`<div class="opts">${q.o.map((o,i)=>`<button class="opt sq ${cls(i,sel.includes(i),q.ans.includes(i))}" ${rv?"disabled":`data-act="toggle" data-i="${i}"`}><span class="bub">${sel.includes(i)?"✓":LETTERS[i]}</span>${o}</button>`).join("")}</div>${!rv&&q.k==="se"?`<div class="muted" style="font-size:12.5px;margin-top:8px">${sel.length}/2 selected</div>`:""}`}
  else if(q.k==="num"){h+=rv?`<div class="numin"><span class="muted">Your answer:</span><b class="mono">${esc(a||"—")}</b>${q.unit||""} <span class="muted">· Correct:</span><b class="mono" style="color:var(--good)">${fmtN(q.ans)}${q.unit||""}</b></div>`:`<div class="numin"><input type="text" id="numIn" inputmode="decimal" autocomplete="off" value="${esc(a||"")}" aria-label="Your answer"> ${q.unit||""}</div>`}
  else if(q.k==="tc"){const sel=a||[];h+=`<div class="blanks">${q.blanks.map((col,b)=>`<div class="blank">${q.blanks.length>1?`<h4>Blank (${"i".repeat(b+1)})</h4>`:""}${col.map((w,i)=>`<button class="${rv?(q.ans[b]===i?"right":sel[b]===i?"wrong":""):(sel[b]===i?"sel":"")}" ${rv?"disabled":`data-act="blank" data-b="${b}" data-i="${i}"`}>${w}</button>`).join("")}</div>`).join("")}</div>`}
  return h;
}
function isAnswered(q,a){if(a===undefined||a===null)return false;if(Array.isArray(a))return q.k==="tc"?q.blanks.every((_,b)=>a[b]!==undefined&&a[b]!==null):a.length>0;return String(a).trim()!==""}
function isPartial(q,a){return q.k==="tc"&&Array.isArray(a)&&a.some(x=>x!=null)&&!isAnswered(q,a)||q.k==="se"&&Array.isArray(a)&&a.length===1}
function parseNum(v){v=String(v||"").trim().replace(/,/g,"").replace(/−/g,"-").replace(/%$/,"");if(/^-?\d+(\.\d+)?\/-?\d+(\.\d+)?$/.test(v)){const [a,b]=v.split("/").map(Number);return b?a/b:NaN}return v===""?NaN:Number(v)}
function isCorrect(q,a){
  if(!isAnswered(q,a))return false;
  if(q.k==="mc"||q.k==="qc")return a===q.ans;
  if(q.k==="num"){const v=parseNum(a);return Math.abs(v-q.ans)<1e-6*Math.max(1,Math.abs(q.ans))}
  if(q.k==="tc")return q.ans.every((x,b)=>a[b]===x);
  return [...a].sort().join()===[...q.ans].sort().join();
}
function vReviewGrid(){
  const s=S.session;const answered=s.qs.filter(q=>isAnswered(q,s.ans[q.id])).length;
  return `<div><div class="runbar"><span class="sec">${esc(s.label)} · Review</span><span class="sp"></span><span class="timer mono" id="timer" data-act="toggleTime" style="cursor:pointer">—</span><button class="btn sm" data-act="unreview">Return to question</button><button class="btn sm on" data-act="submitConfirm">Submit</button></div>
  <div class="qbody"><div class="pane stack"><p><b>${answered}</b> of ${s.qs.length} answered · <b>${s.marked.length}</b> marked. Select a number to go to that question.</p>
  <div class="qnav">${s.qs.map((q,i)=>`<button class="${isAnswered(q,s.ans[q.id])?"ans":""} ${s.marked.includes(q.id)?"mk":""}" data-act="jump" data-i="${i}" aria-label="Question ${i+1}">${i+1}</button>`).join("")}</div>
  ${s.confirm?`<div class="banner"><span>${answered<s.qs.length?`${s.qs.length-answered} question(s) are unanswered and will be marked wrong. `:""}Submit this set?</span><button class="btn sm" data-act="submit">Yes, submit</button><button class="btn sm ghost" data-act="cancelSubmit">Keep working</button></div>`:""}
  </div></div></div>`;
}
function finishSection(){
  const s=S.session;if(!s)return;stampTime();clearInterval(tickH);
  const secs=Math.round((Date.now()-s.start)/1000);
  const items=s.qs.map(q=>({q,a:s.ans[q.id],ok:isCorrect(q,s.ans[q.id]),t:Math.round(s.qtime[q.id]||0)}));
  recordItems(items);
  const c=items.filter(i=>i.ok).length;
  const res={mode:"practice",label:s.label,items,c,n:items.length,secs};
  if(s.daily){S.prog.d40[dayKey()]={c,n:items.length,q:items.filter(i=>i.q.s==="quant").length};const ks=Object.keys(S.prog.d40).sort();ks.slice(0,Math.max(0,ks.length-30)).forEach(k=>delete S.prog.d40[k])}
  if(s.task)doneTask(s.task);
  S.prog.attempts.push({at:Date.now(),mode:s.daily?"Today's 40":"Practice",sec:s.label,c,n:items.length,secs});trimProg();saveProg();
  S.session=null;S.lastResult=res;S.calc.open=false;render();window.scrollTo(0,0);
}
function recordItems(items){
  const p=S.prog;touchStreak();const today=dayKey();
  items.forEach(({q,ok})=>{
    const t=p.topic[q.t]||(p.topic[q.t]={c:0,t:0});t.t++;if(ok)t.c++;
    const ds=p.diff[q.s]||(p.diff[q.s]={});const d=ds[q.d]||(ds[q.d]={c:0,t:0});d.t++;if(ok)d.c++;
    p.xp+=ok?10:2;p.daily[today]=(p.daily[today]||0)+1;
    if(ok){p.errors=p.errors.filter(x=>x!==q.id);delete p.errQ[q.id]}
    else{if(!p.errors.includes(q.id))p.errors.push(q.id);if(q.gen||q.ai)p.errQ[q.id]=JSON.parse(JSON.stringify(q))}
  });
  p.errors=p.errors.slice(-120);const ek=Object.keys(p.errQ);ek.filter(k=>!p.errors.includes(k)).forEach(k=>delete p.errQ[k]);
  const keep=Object.keys(p.errQ);if(keep.length>70)keep.slice(0,keep.length-70).forEach(k=>{delete p.errQ[k];p.errors=p.errors.filter(x=>x!==k)});
  markSeen(items.map(i=>i.q));
}
function trimProg(){const p=S.prog;{const cut=dayKey(new Date(Date.now()-60*864e5));Object.keys(p.cal).forEach(k=>{if(k<cut||!p.cal[k].length)delete p.cal[k]})}p.attempts=p.attempts.slice(-60);p.mocks=p.mocks.slice(-30);p.essays=p.essays.slice(-12);const ks=Object.keys(p.daily).sort();ks.slice(0,Math.max(0,ks.length-120)).forEach(k=>delete p.daily[k]);const tk=Object.keys(p.tasks).sort();tk.slice(0,Math.max(0,tk.length-14)).forEach(k=>delete p.tasks[k])}
function pacing(items){const by={quant:[],verbal:[]};items.forEach(i=>by[i.q.s].push(i.t));return Object.entries(by).filter(([,v])=>v.length).map(([k,v])=>{const avg=v.reduce((a,b)=>a+b,0)/v.length;const tgt=k==="quant"?105:90;return `${k==="quant"?"Quant":"Verbal"}: ${fmt(avg)} per question (GRE pace ${fmt(tgt)}) — ${avg>tgt*1.15?"too slow, practise timed sets":avg<tgt*.5?"very fast, double-check your work":"on pace"}`})}
function vResults(r){
  const a=pct(r.c,r.n);const byT={};r.items.forEach(i=>{const x=byT[i.q.t]||(byT[i.q.t]={c:0,n:0});x.n++;if(i.ok)x.c++});
  return `<div class="head"><div><div class="eyebrow">${esc(r.label)} · results</div><h1>${r.c} of ${r.n} correct</h1><p>${a>=80?"Strong set. Push the difficulty up next time.":a>=55?"Solid base. Study the explanations below for the ones you missed.":"Work through each explanation, then retry these from your error log."}</p></div>
  <div class="row"><button class="btn gold" data-act="again">New set</button><button class="btn ghost" data-act="retryWrong" ${r.items.some(i=>!i.ok)?"":"disabled"}>Retry missed questions</button></div></div>
  <div class="grid g4"><div class="sheet stat"><div class="n mono">${a}%</div><div class="l">accuracy</div></div><div class="sheet stat"><div class="n mono">${fmt(r.secs)}</div><div class="l">total time</div></div><div class="sheet stat"><div class="n mono">${fmt(r.secs/r.n)}</div><div class="l">average per question</div></div><div class="sheet stat"><div class="n mono">+${r.c*10+(r.n-r.c)*2}</div><div class="l">XP earned</div></div></div>
  <div class="grid g2"><div class="sheet stack"><h3>By topic</h3>${Object.entries(byT).map(([t,x])=>`<div class="stack" style="gap:4px"><div class="row" style="justify-content:space-between;font-size:13.5px"><span>${t}</span><span class="mono muted">${x.c}/${x.n}</span></div><div class="bar ${pct(x.c,x.n)>=75?"g":pct(x.c,x.n)>=50?"w":"b"}"><i style="width:${pct(x.c,x.n)}%"></i></div></div>`).join("")}</div>
  <div class="sheet stack"><h3>Pacing</h3>${pacing(r.items).map(l=>`<p style="font-size:14px">${esc(l)}</p>`).join("")}<p class="muted" style="font-size:13px">Slowest question: ${fmt(Math.max(...r.items.map(i=>i.t)))}. Anything past 3 minutes is usually worth guessing, marking and returning to.</p></div></div>
  <div class="sheet">${r.items.map((it,i)=>reviewItem(it,i)).join("")}</div>`;
}
function reviewItem(it,i){
  const q=it.q,pas=passageOf(q),tu=S.tutor[q.id];const rep=S.reportOpen===q.id;const reported=S.myReports.some(x=>x.qid===q.id);
  return `<div class="review-item"><div class="row" style="justify-content:space-between"><div class="row"><span class="mono muted">Q${i+1}</span><span class="pill ${it.ok?"ok":"no"}">${it.ok?"Correct":isAnswered(q,it.a)?"Incorrect":"Unanswered"}</span><span class="pill neu">${esc(q.t)}</span>${q.ai?`<span class="pill wait">AI-written</span>`:""}<span class="muted" style="font-size:12.5px">${["","Easy","Medium","Hard"][q.d]||""}</span></div><span class="mono muted" style="font-size:12.5px">${fmt(it.t||0)}</span></div>
  ${pas?`<details style="margin-top:10px"><summary style="cursor:pointer;font-size:13px;font-weight:600">Show ${esc(pas.title)}</summary><div style="font-family:Georgia,serif;margin-top:8px;font-size:14.5px" class="passage">${pas.text}</div></details>`:""}
  <div style="margin-top:12px">${questionHTML(q,it.a,{ok:it.ok})}</div>
  <div class="explain"><b>Explanation.</b> ${q.gen?q.ex:esc(q.ex)}</div>
  <div class="row" style="margin-top:10px">${S.sample?`<button class="btn sm ghost" data-act="tutor" data-q="${esc(q.id)}" data-a="${esc(JSON.stringify(it.a??null))}" ${tu&&tu.busy?"disabled":""}>${tu&&tu.busy?"Tutor is thinking…":tu&&tu.text?"Ask again":"Ask the AI tutor to explain"}</button>`:""}
  ${S.db&&S.uid&&!S.isOwner?(reported?`<span class="muted" style="font-size:12.5px">Reported to the admin</span>`:`<button class="btn sm ghost" data-act="reportOpen" data-q="${esc(q.id)}">Report a problem</button>`):""}</div>
  ${rep?`<div class="row" style="margin-top:8px"><select id="repWhy" style="max-width:260px"><option>The answer key looks wrong</option><option>The question is unclear</option><option>Typo or display problem</option><option>More than one answer works</option></select><button class="btn sm" data-act="reportSend" data-q="${esc(q.id)}">Send report</button></div>`:""}
  ${S.sample?(tu&&tu.text?`<div class="tutor" id="tutor-${esc(q.id)}">${esc(tu.text)}</div>`:`<div id="tutor-${esc(q.id)}"></div>`):""}
  </div>`;
}
function answerText(q,a){
  if(!isAnswered(q,a))return "no answer";
  if(q.k==="qc")return QC_OPTS[a];if(q.k==="mc")return strip(q.o[a]);if(q.k==="num")return String(a);
  if(q.k==="tc")return a.map((x,b)=>strip(q.blanks[b][x])).join(" / ");return a.map(i=>strip(q.o[i])).join("; ");
}
function correctText(q){if(q.k==="qc")return QC_OPTS[q.ans];if(q.k==="mc")return strip(q.o[q.ans]);if(q.k==="num")return String(q.ans);if(q.k==="tc")return q.ans.map((x,b)=>strip(q.blanks[b][x])).join(" / ");return q.ans.map(i=>strip(q.o[i])).join("; ")}
async function askTutor(qid,aJson){
  const q=qById(qid);if(!q)return;let a=null;try{a=JSON.parse(aJson)}catch(e){}
  S.tutor[qid]={busy:true,text:""};render();
  const pas=passageOf(q)?strip(passageOf(q).text):"";
  const opts=q.k==="qc"?`Quantity A: ${strip(q.a)}\nQuantity B: ${strip(q.b)}\nChoices: ${QC_OPTS.join(" | ")}`:q.o?`Choices: ${q.o.map((o,i)=>LETTERS[i]+") "+strip(o)).join(" | ")}`:q.blanks?`Blank options: ${q.blanks.map((c,b)=>"("+"i".repeat(b+1)+") "+c.map(strip).join(", ")).join(" ; ")}`:"Numeric entry";
  const prompt=`You are a patient GRE tutor. Explain this ${q.s==="quant"?"Quantitative Reasoning":"Verbal Reasoning"} question to a student in plain text (no markdown symbols, no LaTeX). Use short numbered steps, point out the trap they may have fallen into, and end with one quick tip for similar questions. If you believe the given correct answer is wrong, say so plainly. Keep it under 220 words.\n\n${pas?"Passage:\n"+pas+"\n\n":""}Question: ${strip(q.p)}\n${opts}\nCorrect answer: ${correctText(q)}\nStudent's answer: ${answerText(q,a)}`;
  try{const r=await S.sample(prompt,{modelTier:"default",onText:({text})=>{S.tutor[qid].text=text;const el=document.getElementById("tutor-"+qid);if(el){el.className="tutor";el.textContent=text}}});S.tutor[qid]={busy:false,text:r.text}}
  catch(e){S.tutor[qid]={busy:false,text:e&&e.code==="rate_limited"?"The tutor is busy. Try again in a minute.":"The tutor isn't available right now."}}
  if(!S.session)render();
}
async function sendReport(qid){
  const q=qById(qid);const why=($("#repWhy")||{}).value||"Problem";
  const item={qid,reason:why,at:Date.now(),q:q&&(q.gen||q.ai)?JSON.parse(JSON.stringify(q)):null};
  const items=[...S.myReports,item].slice(-25);
  try{await S.db.doc("reports/"+S.uid).set({items});S.myReports=items;S.reportOpen=null;toast("Thanks — the admin will review it")}catch(e){toast("Couldn't send the report.")}
  render();
}

/* ---------- GRE TEST (exam shell) ---------- */
const XDIR={
 awa:{h:"Analytical Writing · Analyze an Issue",t:"30 minutes",b:["You will be given a brief statement on an issue of general interest and instructions on how to respond. You will have 30 minutes to plan and compose a response.","A response to any other issue will receive a score of zero. Trained readers judge how well you consider the complexities of the issue, organize and develop your ideas, support them with reasons and examples, and control the elements of standard written English.","Plan before you write, and leave time to read over your response."]},
 verbal:{h:"Verbal Reasoning",t:"",b:["For each question, indicate the best answer, using the directions given.","You may move back and forth among the questions in this section, mark questions to return to, and change your answers before time runs out. Use Review to see which questions are answered, incomplete or marked."]},
 quant:{h:"Quantitative Reasoning",t:"",b:["For each question, indicate the best answer, using the directions given. An on-screen calculator is available.","All numbers used are real numbers. Figures are not necessarily drawn to scale unless stated. Lines shown as straight are straight, and points on a line appear in the order shown.","You may move back and forth among the questions, mark questions to return to, and change answers before time runs out."]}
};
function startExam(kind){
  S.lastResult=null;S.session=null;clearInterval(tickH);S.calc.open=false;
  const key=studentKey(),seed=Date.now().toString(36);const R=mkR(seedOf(key+seed));
  const V1={type:"verbal",stage:1,n:12,mins:18},Q1={type:"quant",stage:1,n:12,mins:21},V2={type:"verbal",stage:2,n:15,mins:23},Q2={type:"quant",stage:2,n:15,mins:26};
  let secs=kind==="full"?[{type:"awa",mins:30},...(R.chance(.5)?[V1,Q1,V2,Q2]:[Q1,V1,Q2,V2])]:kind==="verbal"?[V1,V2]:[Q1,Q2];
  S.exam={kind,seed,key,sections:secs.map(s=>Object.assign({},s,{qs:null,ans:{},marked:[],qtime:{},start:null,phase:"intro",idx:0})),cur:0,phase:"welcome",used:new Set(),path:{},
    essay:{pid:R.pick(PROMPTS).id,text:"",hist:[""],hi:0,buf:""},modal:null,hideTime:false,started:Date.now()};
  document.body.classList.add("examing");setPresence();
  if(kind==="full"&&S.sample&&S.prog.aiOptIn)ensureAi(true,"exam");
  renderExam();
}
function exSec(){const x=S.exam;return x&&x.sections[x.cur]}
function beginSection(){
  const x=S.exam,sec=exSec();
  if(sec.type!=="awa"&&!sec.qs){
    if(sec.stage===2){const prev=x.sections.find(s=>s.type===sec.type&&s.stage===1);x.path[sec.type]=prev&&prev.n&&prev.c/prev.n>=0.6?"harder":"easier"}
    const target=sec.stage===1?2:(x.path[sec.type]==="harder"?3:1);
    sec.qs=sec.type==="quant"?genQuant(x.key+"|exam|"+x.seed+"|"+x.cur,sec.n,target,true):pickVerbal(sec.n,target,mkR(seedOf(x.key+x.seed+x.cur)),x.used);
    sec.qs.forEach(q=>x.used.add(q.id));if(sec.qs.length<sec.n)sec.mins=Math.ceil(sec.mins*sec.qs.length/sec.n);
  }
  sec.phase="q";sec.start=Date.now();sec.qstart=Date.now();x.phase="sec";startExamTimer();renderExam();
}
function exStamp(){const sec=exSec();if(!sec||!sec.qs||sec.phase!=="q")return;const q=sec.qs[sec.idx];sec.qtime[q.id]=(sec.qtime[q.id]||0)+(Date.now()-sec.qstart)/1000;sec.qstart=Date.now()}
function endSection(){
  const x=S.exam,sec=exSec();exStamp();clearInterval(exTick);x.modal=null;S.calc.open=false;
  if(sec.type!=="awa"){sec.items=sec.qs.map(q=>({q,a:sec.ans[q.id],ok:isCorrect(q,sec.ans[q.id]),t:Math.round(sec.qtime[q.id]||0)}));sec.c=sec.items.filter(i=>i.ok).length;sec.n=sec.items.length}
  sec.phase="done";sec.used=Math.round((Date.now()-sec.start)/1000);
  x.cur++;if(x.cur>=x.sections.length){finishExam();return}
  x.phase="sec";renderExam();
}
function finishExam(){
  const x=S.exam;x.phase="report";const items=x.sections.filter(s=>s.items).flatMap(s=>s.items);recordItems(items);
  const score=type=>{const p=x.sections.filter(s=>s.type===type&&s.items);if(p.length<2)return null;const hard=x.path[type]==="harder";const num=p[0].c+p[1].c*(hard?1.3:.8),den=p[0].n+p[1].n*1.3;return Math.round(130+40*Math.min(1,num/den))};
  x.q=score("quant");x.v=score("verbal");x.items=items;
  const rec={at:Date.now(),kind:x.kind,q:x.q,v:x.v,w:null};S.prog.mocks.push(rec);
  S.prog.attempts.push({at:rec.at,mode:x.kind==="full"?"Full GRE test":"Measure test",sec:x.kind==="full"?"Writing + Verbal + Quant":x.kind==="quant"?"Quantitative":"Verbal",c:items.filter(i=>i.ok).length,n:items.length,secs:Math.round((Date.now()-x.started)/1000)});
  if(x.kind==="full")doneTask("full");
  const words=(x.essay.text.match(/\S+/g)||[]).length;
  if(x.kind==="full"){
    const entry={at:rec.at,pid:x.essay.pid,words,score:null,text:x.essay.text.slice(0,5000)};S.prog.essays.push(entry);
    if(words<20){x.w=0;rec.w=0;entry.score=0}
    else if(S.sample){x.wBusy=true;scoreEssay(x.essay.pid,x.essay.text).then(r=>{x.w=r.score;x.wFeedback=r;rec.w=r.score;entry.score=r.score;x.wBusy=false;saveProg();if(S.exam===x)renderExam()}).catch(()=>{x.wBusy=false;if(S.exam===x)renderExam()})}
  }
  trimProg();saveProg();renderExam();
}
function closeExam(review){
  const x=S.exam;clearInterval(exTick);document.body.classList.remove("examing");$("#examHost").innerHTML="";S.calc.open=false;
  if(review&&x&&x.items)S.lastResult={mode:"exam",kind:x.kind,q:x.q,v:x.v,w:x.w,wFeedback:x.wFeedback,items:x.items,path:x.path,essay:x.essay};
  S.exam=null;renderCalc();go("mock");render();setPresence();
}
let exTick=null;
function startExamTimer(){clearInterval(exTick);exTick=setInterval(()=>{const x=S.exam;if(!x)return clearInterval(exTick);const sec=exSec();if(!sec||sec.phase!=="q")return;const left=sec.mins*60-(Date.now()-sec.start)/1000;const el=$("#xtimer");
  if(el){el.textContent=x.hideTime?"":fmtH(left);el.classList.toggle("low",left<300)}
  if(left<=0){toast("Time is up for this section");endSection()}},500)}
function xBtn(act,icon,label,opts={}){return `<button class="xb ${opts.on?"on":""}" data-act="${act}" ${opts.dis?"disabled":""}><i>${icon}</i>${label}</button>`}
function renderExam(){
  const x=S.exam,h=$("#examHost");if(!x){h.innerHTML="";return}
  const sec=exSec();const total=x.sections.length;
  let bar="",sub="",body="";
  const brand=`<div class="xbrand"><b>ALFREDO GRE PORTAL</b><span>GRE General Test · practice simulation</span></div>`;
  if(x.phase==="welcome"){
    bar=brand+xBtn("xQuit","✕","Quit Test")+xBtn("xContinue","›","Continue",{on:true});
    body=`<div class="xinner"><div class="xdir"><h2>${x.kind==="full"?"GRE General Test":x.kind==="quant"?"Quantitative Reasoning measure":"Verbal Reasoning measure"}</h2>
      <p>This simulation follows the structure and timing of the current GRE General Test. Questions are generated for you, so no two students sit the same test.</p>
      <table class="xrev"><thead><tr><th>Section</th><th>Questions</th><th>Time</th></tr></thead><tbody>${x.sections.map((s,i)=>`<tr><td>Section ${i+1}: ${s.type==="awa"?"Analytical Writing":s.type==="verbal"?"Verbal Reasoning":"Quantitative Reasoning"}</td><td class="mono">${s.type==="awa"?"1 task":s.n}</td><td class="mono">${s.mins} min</td></tr>`).join("")}</tbody></table>
      <p>The second Verbal and second Quantitative sections adapt to how you did on the first. Each section is timed separately; when time runs out, the section ends. There is no scheduled break.</p>
      <p>Select <b>Continue</b> to begin.</p></div></div>`;
  }else if(x.phase==="report"){
    bar=brand+xBtn("xReview","☰","Review answers")+xBtn("xClose","✓","Finish",{on:true});
    const w=x.kind!=="full"?null:x.wBusy?"…":x.w??"—";
    body=`<div class="xinner stack" style="gap:20px"><div class="xdir" style="max-width:none"><h2>Unofficial score report</h2><p>Practice estimates from your performance and the difficulty of the sections you reached. Real GRE scores come only from ETS.</p>
      <div class="xscore">${x.v!=null?`<div><span class="eyebrow">Verbal Reasoning</span><b>${x.v}</b><span class="muted">130–170 · second section ${x.path.verbal}</span></div>`:""}${x.q!=null?`<div><span class="eyebrow">Quantitative Reasoning</span><b>${x.q}</b><span class="muted">130–170 · second section ${x.path.quant}</span></div>`:""}${x.kind==="full"?`<div><span class="eyebrow">Analytical Writing</span><b>${w}</b><span class="muted">0–6 · ${x.wBusy?"scoring with AI…":S.sample?"AI-scored":"score it yourself in Writing"}</span></div>`:""}</div>
      ${x.wFeedback?`<p><b>Essay feedback:</b> ${esc(x.wFeedback.summary)}</p>`:""}</div>
      <table class="xrev"><thead><tr><th>Section</th><th>Correct</th><th>Time used</th></tr></thead><tbody>${x.sections.map((s,i)=>`<tr><td>Section ${i+1}: ${s.type==="awa"?"Analytical Writing":s.type==="verbal"?"Verbal":"Quantitative"}${s.stage===2?` (${x.path[s.type]})`:""}</td><td class="mono">${s.items?s.c+" / "+s.n:(x.essay.text.match(/\S+/g)||[]).length+" words"}</td><td class="mono">${fmtH(s.used||0)} of ${s.mins}:00</td></tr>`).join("")}</tbody></table></div>`;
  }else if(sec.phase==="intro"){
    bar=brand+xBtn("xQuit","✕","Quit Test")+xBtn("xHelp","?","Help")+xBtn("xBegin","›","Continue",{on:true});
    sub=`<span>Section ${x.cur+1} of ${total}</span>`;
    const d=XDIR[sec.type];
    body=`<div class="xinner"><div class="xdir"><h2>Section ${x.cur+1} of ${total}: ${d.h}</h2><p><b>${sec.type==="awa"?"1 task":sec.n+" questions"} · ${sec.mins} minutes</b></p>${d.b.map(t=>`<p>${t}</p>`).join("")}${sec.stage===2?`<p>This section's difficulty was set by your performance on the first ${sec.type==="verbal"?"Verbal":"Quantitative"} section.</p>`:""}<p>Select <b>Continue</b> to start the timer.</p></div></div>`;
  }else if(sec.type==="awa"){
    const pr=PROMPTS.find(p=>p.id===x.essay.pid);
    bar=brand+xBtn("xQuit","✕","Quit Test")+xBtn("xExit","⇥","Exit Section")+xBtn("xHelp","?","Help")+xBtn("xNextSec","›","Next",{on:true});
    sub=`<span>Section ${x.cur+1} of ${total} | Analytical Writing</span><span class="sp"></span><span class="xtime ${""}" id="xtimer">${x.hideTime?"":fmtH(sec.mins*60-(Date.now()-sec.start)/1000)}</span><button data-act="xHideTime">${x.hideTime?"Show Time":"Hide Time"}</button>`;
    body=`<div class="xsplit"><div><p style="font-family:var(--f-body);font-weight:700;margin-bottom:10px">Analyze an Issue</p><p style="font-size:17px;margin-bottom:16px">${esc(pr.text)}</p><p style="font-family:var(--f-body);font-size:14px">${ISSUE_TASK}</p></div>
      <div><div class="xtools"><button data-act="xCut">Cut</button><button data-act="xCopy">Copy</button><button data-act="xPaste">Paste</button><button data-act="xUndo">Undo</button><button data-act="xRedo">Redo</button></div>
      <textarea class="xessay" id="xEssay" spellcheck="false" autocomplete="off" aria-label="Your response">${esc(x.essay.text)}</textarea></div></div>`;
  }else if(sec.review){
    bar=brand+xBtn("xQuit","✕","Quit Test")+xBtn("xExit","⇥","Exit Section")+xBtn("xGoTo","↳","Go to Question")+xBtn("xReturn","↩","Return",{on:true});
    sub=`<span>Section ${x.cur+1} of ${total} | Review</span><span class="sp"></span><span class="xtime" id="xtimer"></span><button data-act="xHideTime">${x.hideTime?"Show Time":"Hide Time"}</button>`;
    body=`<div class="xinner"><p style="margin-bottom:12px">Select a question, then select <b>Go to Question</b> (or double-click a row). Select <b>Return</b> to go back to where you were.</p><div class="tablebox"><table class="xrev"><thead><tr><th>Question</th><th>Status</th><th>Marked</th></tr></thead><tbody>${sec.qs.map((q,i)=>{const a=sec.ans[q.id];const st=isAnswered(q,a)?"Answered":isPartial(q,a)?"Incomplete":"Not Answered";return `<tr class="${sec.revSel===i?"cur":""}" data-act="xRevSel" data-i="${i}"><td class="mono">${i+1}</td><td>${st}</td><td>${sec.marked.includes(q.id)?"✓":""}</td></tr>`}).join("")}</tbody></table></div></div>`;
  }else{
    const q=sec.qs[sec.idx];const pas=passageOf(q);const marked=sec.marked.includes(q.id);
    bar=brand+xBtn("xQuit","✕","Quit Test")+xBtn("xExit","⇥","Exit Section")+xBtn("xReviewList","☰","Review")+xBtn("xMark","⚑",marked?"Unmark":"Mark",{on:marked})+(sec.type==="quant"?xBtn("calc","▦","Calculator",{on:S.calc.open}):"")+xBtn("xHelp","?","Help")+xBtn("xBack","‹","Back",{dis:sec.idx===0})+xBtn("xNext","›","Next",{on:true});
    sub=`<span>Section ${x.cur+1} of ${total} | Question ${sec.idx+1} of ${sec.qs.length}</span><span class="sp"></span><span class="xtime" id="xtimer">${x.hideTime?"":fmtH(sec.mins*60-(Date.now()-sec.start)/1000)}</span><button data-act="xHideTime">${x.hideTime?"Show Time":"Hide Time"}</button>`;
    const qh=questionHTML(q,sec.ans[q.id],null);
    body=pas?`<div class="xsplit"><div class="passage"><p style="font-family:var(--f-body);font-size:13px;color:#56616f">Questions ${sec.qs.findIndex(z=>z.pid===q.pid)+1} to ${sec.qs.findIndex(z=>z.pid===q.pid)+sec.qs.filter(z=>z.pid===q.pid).length} are based on the following ${q.s==="quant"?"data":"passage"}.</p>${pas.text}</div><div>${qh}</div></div>`:`<div class="xinner">${qh}</div>`;
  }
  let modal="";
  if(x.modal==="quit")modal=`<div class="xmodal"><div class="box"><h2 style="font-family:var(--f-body);font-weight:700;font-size:18px">Quit the test?</h2><p>Your answers will not be scored and nothing from this test is saved.</p><div class="row"><button class="btn" data-act="xQuitYes">Quit Test</button><button class="btn ghost" data-act="xModalClose">Return to test</button></div></div></div>`;
  if(x.modal==="exit")modal=`<div class="xmodal"><div class="box"><h2 style="font-family:var(--f-body);font-weight:700;font-size:18px">Exit this section?</h2><p>${sec.type==="awa"?"Your response will be submitted as it is.":`You have ${sec.qs.filter(q=>!isAnswered(q,sec.ans[q.id])).length} unanswered question(s). Once you exit, you cannot return to this section.`}</p><div class="row"><button class="btn" data-act="xExitYes">Exit Section</button><button class="btn ghost" data-act="xModalClose">Return to section</button></div></div></div>`;
  if(x.modal==="help"){const d=XDIR[sec&&sec.type||"verbal"];const q=curQ();modal=`<div class="xmodal"><div class="box"><h2 style="font-family:var(--f-body);font-weight:700;font-size:18px">Help · ${d.h}</h2>${d.b.map(t=>`<p>${t}</p>`).join("")}${q?`<p><b>This question:</b> ${dirFor(q)}</p>`:""}<p class="muted" style="font-size:13px">Review lists every question and its status. Mark flags a question for review. Hide Time hides the clock; it keeps running.</p><button class="btn" data-act="xModalClose">Return</button></div></div>`}
  h.innerHTML=`<div class="exam" role="application" aria-label="GRE test simulation"><div class="xbar">${bar}</div>${sub?`<div class="xsub">${sub}</div>`:""}<div class="xbody" style="position:relative">${body}${modal}</div></div>`;
  renderCalc();
}
async function scoreEssay(pid,text){
  const pr=PROMPTS.find(p=>p.id===pid);
  const prompt=`You are an experienced GRE Analytical Writing rater. Score the student's "Analyze an Issue" response on the official 0–6 scale in half-point steps, judging position, development and support, organization, and language. Off-topic or nearly empty responses get 0. Be fair and specific.\n\nIssue statement: "${pr.text}"\nTask: ${ISSUE_TASK}\n\nStudent response:\n"""${text.slice(0,9000)}"""\n\nReturn only JSON: {"score": number, "summary": "two sentences", "strengths": ["...","..."], "improvements": ["...","...","..."]}`;
  const r=await S.sample.json(prompt,{modelTier:"default"});
  return{score:Math.max(0,Math.min(6,Math.round((Number(r.score)||0)*2)/2)),summary:String(r.summary||""),strengths:(r.strengths||[]).slice(0,4).map(String),improvements:(r.improvements||[]).slice(0,4).map(String)};
}
function essayHist(){const e=S.exam.essay;const el=$("#xEssay");if(!el)return;e.text=el.value;if(e.hist[e.hi]!==e.text){e.hist=e.hist.slice(0,e.hi+1);e.hist.push(e.text);if(e.hist.length>200)e.hist.shift();e.hi=e.hist.length-1}}
function examAct(act,d,el){
  const x=S.exam,sec=exSec();
  switch(act){
    case "xContinue":x.phase="sec";renderExam();break;
    case "xBegin":beginSection();break;
    case "xQuit":x.modal="quit";renderExam();break;
    case "xQuitYes":clearInterval(exTick);S.exam=null;document.body.classList.remove("examing");$("#examHost").innerHTML="";S.calc.open=false;renderCalc();render();toast("Test ended without scoring");break;
    case "xExit":x.modal="exit";renderExam();break;
    case "xExitYes":endSection();break;
    case "xModalClose":x.modal=null;renderExam();break;
    case "xHelp":x.modal="help";renderExam();break;
    case "xHideTime":x.hideTime=!x.hideTime;renderExam();break;
    case "xNextSec":x.modal="exit";renderExam();break;
    case "xMark":{const id=sec.qs[sec.idx].id;const i=sec.marked.indexOf(id);i>=0?sec.marked.splice(i,1):sec.marked.push(id);renderExam();break}
    case "xNext":exStamp();if(sec.idx<sec.qs.length-1){sec.idx++;renderExam();$(".xbody").scrollTop=0}else{sec.review=true;sec.revSel=sec.idx;renderExam()}break;
    case "xBack":exStamp();if(sec.idx>0){sec.idx--;renderExam()}break;
    case "xReviewList":exStamp();sec.review=true;sec.revSel=sec.idx;renderExam();break;
    case "xRevSel":if(sec.revSel===+d.i&&el._lastClick&&Date.now()-el._lastClick<400){sec.idx=+d.i;sec.review=false;sec.qstart=Date.now();renderExam();break}sec.revSel=+d.i;renderExam();{const row=document.querySelector(`[data-act="xRevSel"][data-i="${d.i}"]`);if(row)row._lastClick=Date.now()}break;
    case "xGoTo":sec.idx=sec.revSel??sec.idx;sec.review=false;sec.qstart=Date.now();renderExam();break;
    case "xReturn":sec.review=false;sec.qstart=Date.now();renderExam();break;
    case "xReview":closeExam(true);break;
    case "xClose":closeExam(false);break;
    case "xCut":case "xCopy":{const t=$("#xEssay");if(!t)break;const a=t.selectionStart,b=t.selectionEnd;if(a===b)break;x.essay.buf=t.value.slice(a,b);if(act==="xCut"){t.setRangeText("",a,b,"end");essayHist()}t.focus();break}
    case "xPaste":{const t=$("#xEssay");if(!t||!x.essay.buf)break;t.setRangeText(x.essay.buf,t.selectionStart,t.selectionEnd,"end");essayHist();t.focus();break}
    case "xUndo":case "xRedo":{const e=x.essay;essayHist();e.hi=Math.max(0,Math.min(e.hist.length-1,e.hi+(act==="xUndo"?-1:1)));e.text=e.hist[e.hi];const t=$("#xEssay");if(t){t.value=e.text;t.focus()}break}
  }
}
function vMock(){
  if(S.lastResult&&S.lastResult.mode==="exam"){const r=S.lastResult;
    return `<div class="head"><div><div class="eyebrow">${r.kind==="full"?"Full GRE test":"Measure test"} · answer review</div><h1>${[r.v!=null?"Verbal "+r.v:"",r.q!=null?"Quant "+r.q:"",r.kind==="full"?"Writing "+(r.w??"—"):""].filter(Boolean).join(" · ")}</h1><p>Every question with your answer, the key and an explanation. Missed questions are in your error log.</p></div><button class="btn gold" data-act="mockHome">Back to tests</button></div>
    ${r.wFeedback?`<div class="sheet stack"><h2>Essay feedback · ${r.w}/6</h2><p>${esc(r.wFeedback.summary)}</p><div class="grid g2"><div class="stack" style="gap:4px"><b>What worked</b>${r.wFeedback.strengths.map(s=>`<p style="font-size:14px">✓ ${esc(s)}</p>`).join("")}</div><div class="stack" style="gap:4px"><b>To raise your score</b>${r.wFeedback.improvements.map(s=>`<p style="font-size:14px">→ ${esc(s)}</p>`).join("")}</div></div></div>`:""}
    <div class="sheet">${r.items.map((it,i)=>reviewItem(it,i)).join("")}</div>`}
  const hist=S.prog.mocks.slice(-10).reverse();
  const modes=[["full","Full GRE test","1 h 58 min","Analytical Writing (Issue) · Verbal 12 + 15 · Quant 12 + 15. Adaptive second sections, scored like the real thing."],["quant","Quantitative measure","47 min","Quant section 1 (12 questions, 21 min) and an adaptive section 2 (15 questions, 26 min)."],["verbal","Verbal measure","41 min","Verbal section 1 (12 questions, 18 min) and an adaptive section 2 (15 questions, 23 min)."]];
  return `<div class="head"><div><div class="eyebrow">Real test format</div><h1>GRE Test</h1><p>Opens full screen in a test-centre layout, with the same toolbar, section timing, Review screen, Mark, Hide Time, calculator with Transfer Display, and essay editor. Every test is generated fresh, so no two students see the same questions.</p></div></div>
  <div class="grid g3">${modes.map(([k,t,time,d])=>`<div class="sheet modecard"><span class="eyebrow">${time}</span><h2>${t}</h2><p style="font-size:14px;flex:1">${d}</p><button class="btn ${k==="full"?"gold":""}" data-act="startExam" data-v="${k}">Start ${k==="full"?"full test":"measure"}</button></div>`).join("")}</div>
  <div class="grid g2"><div class="sheet stack"><h2>Your test history</h2>${hist.length?`<div class="tablebox"><table><thead><tr><th>Date</th><th>Type</th><th>Verbal</th><th>Quant</th><th>Writing</th></tr></thead><tbody>${hist.map(h=>`<tr><td>${fmtDate(h.at)}</td><td>${h.kind==="full"?"Full":h.kind==="quant"?"Quant":h.kind==="verbal"?"Verbal":"Mini"}</td><td class="mono">${h.v??"—"}</td><td class="mono">${h.q??"—"}</td><td class="mono">${h.w??"—"}</td></tr>`).join("")}</tbody></table></div>`:`<div class="empty">No tests yet. Your first full test sets your baseline.</div>`}</div>
  <div class="sheet stack"><h2>Test-day habits to practise</h2><ul style="margin:0;padding-left:18px;font-size:14px" class="stack"><li>Use Mark and Review: skip anything taking over 2½ minutes and come back.</li><li>Answer every question. There's no penalty for wrong answers.</li><li>In Quant, the comparison questions come first. Try plugging in 0, 1, −1 and fractions before choosing D.</li><li>In Verbal, predict a word for each blank before you look at the choices.</li><li>Spend 5 minutes outlining your essay before you write.</li></ul></div></div>`;
}

/* ---------- Writing ---------- */
function vWriting(){
  const e=S.essay;
  if(e.pid){const pr=PROMPTS.find(p=>p.id===e.pid);
    const wc=(e.text.match(/\S+/g)||[]).length;
    return `<div class="head"><div><div class="eyebrow">Analytical Writing · Analyze an Issue</div><h1>${e.result?"Your essay feedback":"Write your response"}</h1></div>
    <div class="row">${e.start?`<span class="timer mono" id="etimer" style="background:var(--ink);color:var(--sheet)">30:00</span>`:""}<button class="btn ghost" data-act="essayExit">Back to prompts</button></div></div>
    <div class="sheet stack"><div class="qstem" style="font-family:Georgia,serif;font-size:18px">"${esc(pr.text)}"</div><p class="muted" style="font-size:13.5px">${ISSUE_TASK}</p></div>
    ${e.result?essayResult(e):`<div class="sheet stack"><textarea class="essay" id="essayIn" spellcheck="false" placeholder="Take a clear position in your first paragraph, then support it with two or three developed reasons and examples. Address a counterargument before you conclude.">${esc(e.text)}</textarea>
    <div class="row" style="justify-content:space-between"><span class="mono muted" id="wc">${wc} words</span><div class="row">${e.start?"":`<button class="btn ghost" data-act="essayStart">Start 30-minute timer</button>`}<button class="btn gold" data-act="essaySubmit" ${wc<50||e.busy?"disabled":""}>${e.busy?"Scoring…":S.sample?"Submit for scoring":"Finish and self-score"}</button></div></div>
    <p class="muted" style="font-size:12.5px">Spell-check is off, as on the real test. Strong responses usually run 450–600 words.</p></div>`}`}
  const past=S.prog.essays.slice().reverse();
  return `<div class="head"><div><div class="eyebrow">Analytical Writing</div><h1>Issue essay practice</h1><p>The GRE has one Issue task: 30 minutes to take and defend a position. Pick a prompt, write under time, and get scored on the 0–6 scale.</p></div><button class="btn gold" data-act="essayPick" data-v="${PROMPTS[Math.floor(Math.random()*PROMPTS.length)].id}">Random prompt</button></div>
  <div class="grid g2">${PROMPTS.map(p=>`<div class="sheet stack"><p style="font-family:Georgia,serif;font-size:16px">"${esc(p.text)}"</p><div class="row"><button class="btn sm" data-act="essayPick" data-v="${p.id}">Write on this</button>${S.prog.essays.some(x=>x.pid===p.id)?`<span class="pill ok">attempted</span>`:""}</div></div>`).join("")}</div>
  ${past.length?`<div class="sheet stack"><h2>Your essays</h2><div class="tablebox"><table><thead><tr><th>Date</th><th>Prompt</th><th>Words</th><th>Score</th></tr></thead><tbody>${past.map(x=>`<tr><td>${fmtDate(x.at)}</td><td style="max-width:420px">${esc((PROMPTS.find(p=>p.id===x.pid)||{}).text||"")}</td><td class="mono">${x.words}</td><td class="mono"><b>${x.score??"—"}</b></td></tr>`).join("")}</tbody></table></div></div>`:""}`;
}
function essayResult(e){const r=e.result;
  if(r.self)return `<div class="sheet stack"><h2>Score yourself</h2><p>Check each statement that is true of your essay.</p>
  ${["My first paragraph states a clear position on the claim","I gave at least two distinct reasons","Each reason has a specific example","I addressed when the statement might not hold","My paragraphs follow a logical order with transitions","My sentences are varied and mostly error-free"].map((t,i)=>`<div class="check ${r.checks[i]?"done":""}" data-act="selfCheck" data-i="${i}"><span class="bx">${r.checks[i]?"✓":""}</span><span class="tl">${t}</span></div>`).join("")}
  <div class="row"><span class="eyebrow">Estimated score</span><span class="mono" style="font-size:24px">${selfScore(r.checks)}</span></div><button class="btn" data-act="saveSelf">Save essay</button></div>`;
  return `<div class="grid g3"><div class="sheet stat"><div class="n mono">${r.score}</div><div class="l">score on the 0–6 scale</div></div><div class="sheet stat"><div class="n mono">${(e.text.match(/\S+/g)||[]).length}</div><div class="l">words</div></div><div class="sheet stat"><div class="n mono">${fmt(e.elapsed||0)}</div><div class="l">time used</div></div></div>
  <div class="sheet stack"><p>${esc(r.summary||"")}</p><div class="grid g2"><div class="stack" style="gap:6px"><b>What worked</b>${(r.strengths||[]).map(s=>`<p style="font-size:14px">✓ ${esc(s)}</p>`).join("")}</div><div class="stack" style="gap:6px"><b>To raise your score</b>${(r.improvements||[]).map(s=>`<p style="font-size:14px">→ ${esc(s)}</p>`).join("")}</div></div></div>
  <details class="sheet"><summary style="cursor:pointer;font-weight:600">Your essay</summary><div style="white-space:pre-wrap;font-family:Georgia,serif;margin-top:10px">${esc(e.text)}</div></details>`;
}
function selfScore(c){const n=c.filter(Boolean).length;return [1,2,3,3.5,4,5,6][n]}
let essayH=null;
function tickEssay(){clearInterval(essayH);essayH=setInterval(()=>{const e=S.essay;const el=$("#etimer");if(!e.start){clearInterval(essayH);return}if(!el)return;const left=e.dur-(Date.now()-e.start)/1000;el.textContent=fmt(left);if(left<=0){clearInterval(essayH);toast("Time is up. Submit when ready.");el.textContent="0:00"}},500)}
async function submitEssay(){
  const e=S.essay;e.elapsed=e.start?Math.round((Date.now()-e.start)/1000):0;e.start=null;clearInterval(essayH);
  if(!S.sample){e.result={self:true,checks:[false,false,false,false,false,false]};render();return}
  e.busy=true;render();
  try{const r=await scoreEssay(e.pid,e.text);e.result=r;
    S.prog.essays.push({at:Date.now(),pid:e.pid,words:(e.text.match(/\S+/g)||[]).length,score:r.score,text:e.text.slice(0,5000)});touchStreak();S.prog.xp+=30;doneTask("essay");trimProg();saveProg();
  }catch(err){e.result={self:true,checks:[false,false,false,false,false,false]};toast("AI scoring isn't available, so you can score it yourself.")}
  e.busy=false;render();
}

/* ---------- Vocab ---------- */
const INTERVALS=[0,1,2,4,8];
function vocabState(w){return S.prog.vocab[w]||{b:0,due:0}}
function dueWords(){const now=Date.now();return VOCAB.filter(([w])=>vocabState(w).due<=now)}
function vVocab(){
  const v=S.vocab,due=dueWords();const counts=[0,0,0,0,0];VOCAB.forEach(([w])=>counts[vocabState(w).b]++);
  const today=(S.prog.vocabDay&&S.prog.vocabDay.d===dayKey())?S.prog.vocabDay.n:0;
  const head=`<div class="head"><div><div class="eyebrow">${VOCAB.length} high-frequency GRE words</div><h1>Vocabulary</h1><p>Cards you know move up a box and come back less often. Cards you miss drop to box 1 and return tomorrow.</p></div><div class="row">${[["cards","Flashcards"],["quiz","Quick quiz"],["list","Word list"]].map(([k,l])=>`<button class="chip ${v.mode===k?"on":""}" data-act="vmode" data-v="${k}">${l}</button>`).join("")}</div></div>
  <div class="sheet stack"><div class="row" style="justify-content:space-between"><span class="eyebrow">Leitner boxes</span><span class="muted" style="font-size:13px">${due.length} due now · ${today}/30 reviewed today · ${counts[4]} mastered</span></div><div class="boxes">${counts.map((c,i)=>`<span><b>${c}</b>${i===0?"New":i===4?"Mastered":"Box "+i}</span>`).join("")}</div></div>`;
  if(v.mode==="list")return head+`<div class="sheet tablebox"><table><thead><tr><th>Word</th><th></th><th>Meaning</th><th>Box</th></tr></thead><tbody>${VOCAB.map(([w,ps,d])=>`<tr><td><b>${w}</b></td><td class="muted"><i>${ps}</i></td><td>${d}</td><td class="mono">${vocabState(w).b}</td></tr>`).join("")}</tbody></table></div>`;
  if(v.mode==="quiz"){if(!v.quiz)newQuiz();const qz=v.quiz;
    return head+`<div class="sheet stack" style="max-width:640px;margin:0 auto;width:100%"><div class="row" style="justify-content:space-between"><span class="eyebrow">Question ${qz.n+1}</span><span class="mono muted">${qz.score}/${qz.n} correct</span></div><h2 style="font-size:30px">${qz.word}</h2><p class="muted">Choose the closest meaning.</p><div class="opts">${qz.opts.map((o,i)=>`<button class="opt ${qz.picked!=null?(i===qz.ans?"right":i===qz.picked?"wrong":""):""}" ${qz.picked!=null?"disabled":`data-act="vpick" data-i="${i}"`}><span class="bub">${LETTERS[i]}</span>${o}</button>`).join("")}</div>${qz.picked!=null?`<button class="btn gold" data-act="vnext">Next word</button>`:""}</div>`}
  const list=due.length?due:VOCAB;const card=list[v.i%list.length];
  return head+`<div class="stack" style="align-items:center;gap:16px"><div class="card3d ${v.flip?"flip":""}" data-act="vflip" role="button" tabindex="0" aria-label="Flip card"><div class="in"><div class="face"><span class="eyebrow">${due.length?"Due card":"Extra review"} · box ${vocabState(card[0]).b}</span><span class="w">${card[0]}</span><span class="muted">Tap to reveal</span></div><div class="face back"><span class="eyebrow"><i>${card[1]}</i></span><span style="font-size:22px;font-family:var(--f-display)">${card[2]}</span></div></div></div>
  <div class="row"><button class="btn danger" data-act="vgrade" data-v="0" data-w="${card[0]}">Missed it</button><button class="btn" data-act="vgrade" data-v="1" data-w="${card[0]}" style="background:var(--good);border-color:var(--good)">Knew it</button></div></div>`;
}
function newQuiz(){const v=S.vocab;const pick=shuffle(VOCAB).slice(0,5);const ans=Math.floor(Math.random()*5);const prev=v.quiz||{n:0,score:0};v.quiz={word:pick[ans][0],opts:pick.map(x=>x[2]),ans,picked:null,n:prev.n,score:prev.score}}

/* ---------- Tools ---------- */
function vTools(){
  const p=S.prog.profile;const days=p.testDate?Math.ceil((new Date(p.testDate+"T00:00")-new Date())/864e5):null;
  const weeks=days&&days>0?Math.max(1,Math.ceil(days/7)):6;const weak=weakTopics(null,7);
  const plan=[];for(let w=1;w<=Math.min(weeks,12);w++){
    const phase=w===weeks?"Final week":w<=Math.ceil(weeks*0.5)?"Foundations":"Mixed & timed";
    const f=[weak[(w-1)%weak.length],weak[w%weak.length]];
    plan.push({w,phase,items:phase==="Final week"?["Full GRE test early in the week","Redo your entire error log","One timed Issue essay","Light vocab only — rest the day before"]:phase==="Foundations"?[`Focus: ${f[0]} and ${f[1]}`,`${Math.round(p.hours*0.4)} h Quant · ${Math.round(p.hours*0.35)} h Verbal`,"Today's 40 at least 4 days","30 vocab cards a day","One Issue essay"]:[`Timed mixed sets with extra ${f[0]}`,"One full GRE test, then review every miss","Today's 40 every day","Clear your error log","One timed Issue essay"]})}
  return `<div class="head"><div><div class="eyebrow">Toolkit</div><h1>Study tools</h1><p>A formula sheet, a GRE-style calculator, a week-by-week plan built from your weak topics, and a quick guide to the test.</p></div><button class="btn" data-act="calc">${S.calc.open?"Close":"Open"} calculator</button></div>
  <div class="sheet stack"><div class="row" style="justify-content:space-between"><h2>Study planner</h2><div class="row"><label class="f" style="flex-direction:row;align-items:center;gap:8px">Hours per week<input type="number" id="pl-hours" min="2" max="40" value="${p.hours}" style="width:80px"></label><label class="f" style="flex-direction:row;align-items:center;gap:8px">Test date<input type="date" id="pl-date" value="${esc(p.testDate)}" style="width:170px"></label><button class="btn sm" data-act="savePlan">Update plan</button></div></div>
  <p class="muted" style="font-size:13.5px">${days&&days>0?`${weeks} week${weeks>1?"s":""} until test day. `:"No test date set, so this shows a 6-week plan. "}Weak topics come first and the order changes as your accuracy changes.</p>
  <div class="grid g3">${plan.map(x=>`<div class="sheet stack" style="background:var(--paper);gap:8px"><div class="row" style="justify-content:space-between"><b>Week ${x.w}</b><span class="pill ${x.phase==="Final week"?"wait":x.phase==="Foundations"?"neu":"ok"}">${x.phase}</span></div><ul style="margin:0;padding-left:18px;font-size:13.5px">${x.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}</div></div>
  <div class="grid g2">${FORMULAS.map(([h,rows])=>`<div class="sheet formula"><h3>${h}</h3><dl>${rows.map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl></div>`).join("")}
  <div class="sheet stack"><h3>GRE at a glance</h3><div class="tablebox"><table><thead><tr><th>Section</th><th>Questions</th><th>Time</th></tr></thead><tbody><tr><td>Analytical Writing (Issue)</td><td class="mono">1 task</td><td class="mono">30 min</td></tr><tr><td>Verbal Reasoning</td><td class="mono">12 + 15</td><td class="mono">18 + 23 min</td></tr><tr><td>Quantitative Reasoning</td><td class="mono">12 + 15</td><td class="mono">21 + 26 min</td></tr></tbody></table></div><p class="muted" style="font-size:13px">About 1 hour 58 minutes in total. Verbal and Quant are each scored 130–170 in 1-point steps; Writing is scored 0–6 in half points. The second section of each measure adapts to your first.</p></div></div>`;
}

/* ---------- Calculator ---------- */
function calcVal(){const t=S.calc.tok;for(let i=t.length-1;i>=0;i--)if(isNumTok(t[i]))return t[i];return "0"}
const isNumTok=x=>/^-?[\d.]+(e[-+]?\d+)?$/.test(x);
function evalTokens(t){let i=0;
  const peek=()=>t[i],next=()=>t[i++];
  function expr(){let v=term();while(peek()==="+"||peek()==="−"){const o=next();const r=term();v=o==="+"?v+r:v-r}return v}
  function term(){let v=factor();while(peek()==="×"||peek()==="÷"){const o=next();const r=factor();v=o==="×"?v*r:v/r}return v}
  function factor(){const x=next();if(x==="("){const v=expr();if(peek()===")")next();return v}if(x==="−")return -factor();if(x!==undefined&&isNumTok(x))return parseFloat(x);throw new Error("bad")}
  const v=expr();if(i<t.length)throw new Error("bad");return v}
function fmtCalc(v){if(!isFinite(v))return "Error";const s=parseFloat(v.toPrecision(10));return Math.abs(s)>=1e8?"Error":String(s)}
function calcKey(k){
  const c=S.calc,t=c.tok;c.note="";const last=t[t.length-1];
  if(/^[\d.]$/.test(k)){if(c.fresh){c.tok=[];c.fresh=false}const L=c.tok[c.tok.length-1];
    if(L&&isNumTok(L)){if(k==="."&&L.includes("."))return;if(L.replace(/[-.]/g,"").length>=8)return;c.tok[c.tok.length-1]=(L==="0"&&k!=="."?"":L)+k}
    else if(L===")")return;else c.tok.push(k==="."?"0.":k)}
  else if("+−×÷".includes(k)){c.fresh=false;if(!t.length){if(k==="−")t.push("−");return}if("+−×÷".includes(last))t[t.length-1]=k;else if(last!=="(")t.push(k);else if(k==="−")t.push("−")}
  else if(k==="("){c.fresh=false;if(!t.length||"+−×÷(".includes(last))t.push("(")}
  else if(k===")"){const open=t.filter(x=>x==="(").length-t.filter(x=>x===")").length;if(open>0&&(isNumTok(last)||last===")"))t.push(")")}
  else if(k==="±"||k==="√"||k==="%"){for(let i=t.length-1;i>=0;i--)if(isNumTok(t[i])){let v=parseFloat(t[i]);if(k==="±")v=-v;else if(k==="%")v=v/100;else{if(v<0){c.note="Error: negative root";return renderCalc()}v=Math.sqrt(v)}t[i]=fmtCalc(v);break}}
  else if(k==="="){try{const v=evalTokens(t);c.tok=[fmtCalc(v)];c.fresh=true}catch(e){c.note="Error"}}
  else if(k==="C"){c.tok=[];c.fresh=false}
  else if(k==="CE"){if(t.length&&isNumTok(last))t.pop()}
  else if(k==="MR"){const v=String(c.mem);if(c.fresh)c.tok=[];c.fresh=false;if(!c.tok.length||!isNumTok(c.tok[c.tok.length-1]))c.tok.push(v)}
  else if(k==="MC"){c.mem=0}
  else if(k==="M+"){c.mem=parseFloat(fmtCalc(c.mem+parseFloat(calcVal())))}
  else if(k==="transfer"){const q=curQ();if(q&&q.k==="num"){const tgt=S.exam?exSec().ans:S.session.ans;tgt[q.id]=calcVal();const el=$("#numIn");if(el)el.value=calcVal();toast("Transferred to the answer box")}}
  renderCalc();
}
function renderCalc(){
  const h=$("#calcHost");const c=S.calc;if(!c.open){h.innerHTML="";return}
  const q=curQ();const canT=q&&q.k==="num";
  const keys=[["MR","MC","M+","(",")"],["7","8","9","÷","C"],["4","5","6","×","CE"],["1","2","3","−","√"],["0",".","±","+","%"]];
  h.innerHTML=`<div class="calc" role="dialog" aria-label="Calculator"><div class="ch"><span>Calculator</span><button class="btn sm ghost" data-act="calc" aria-label="Close calculator">×</button></div>
  <div class="disp"><small>${c.mem?"M ":""}${esc(c.note)}</small><span style="font-size:19px">${esc(c.tok.length?c.tok.join(" "):"0")}</span></div>
  <button class="btn sm ${canT?"gold":"ghost"}" style="width:100%;justify-content:center;margin-top:8px" data-act="ck" data-k="transfer" ${canT?"":"disabled"}>Transfer Display</button>
  <div class="keys">${keys.flat().map(k=>`<button class="${"+−×÷√%±()".includes(k)?"op":""}" data-act="ck" data-k="${k}">${k}</button>`).join("")}<button class="eq" style="grid-column:span 5" data-act="ck" data-k="=">=</button></div></div>`;
}

/* ---------- Library ---------- */
function reqStatusSelf(){const r=S.myReq,g=S.grant;if(g&&g.status==="approved")return "approved";if(!r)return g?g.status:"none";if(!g)return "pending";return (r.at||0)>(g.at||0)?"pending":g.status}
function bookCard(b,open){
  return `<div class="book ${open?"":"locked"}"><div class="spine" style="background:${b.category==="Quant"?"var(--navy)":b.category==="Verbal"?"var(--good)":b.category==="Writing"?"var(--accent)":"var(--ink-2)"}"></div><span class="eyebrow">${esc(b.category||"General")}</span><h3>${esc(b.title)}</h3>${b.author?`<span class="muted" style="font-size:13px">${esc(b.author)}</span>`:""}<p style="font-size:13.5px;flex:1">${esc(b.desc||"")}</p>
  ${open?(b.url?`<a class="btn sm" href="${esc(safeUrl(b.url))}" target="_blank" rel="noopener">${b.kind==="file"?"Open file":"Open resource"} ↗</a>`:`<span class="muted" style="font-size:12.5px">No file attached yet</span>`):`<span class="pill wait">Locked</span>`}</div>`;
}
function safeUrl(u){u=String(u||"");if(/^https?:\/\//i.test(u)||u.startsWith("/_blob/"))return u;return "#"}
function vLibrary(){
  const head=`<div class="head"><div><div class="eyebrow">Study library</div><h1>Books & resources</h1><p>The library opens once the portal admin approves your request. Approved students can read every resource listed here.</p></div>${S.isOwner?`<a class="btn" href="#admin" data-act="nav" data-v="admin">Manage library</a>`:""}</div>`;
  if(!S.ready)return head+`<div class="empty">Loading the library…</div>`;
  if(S.isOwner){const books=S.catalog||[];return head+`<div class="banner"><b>Admin view</b><span>You see the library the way approved students do. ${pendingCount()} request(s) waiting.</span></div>`+(books.length?`<div class="grid g3">${books.map(b=>bookCard(b,true)).join("")}</div>`:`<div class="empty">No resources yet. Add books, notes or links from the Admin Desk.</div>`)}
  if(!S.db||!S.uid)return head+`<div class="sheet stack" style="max-width:640px"><h2>Library access</h2><p>Book requests and approvals run on the ALFREDO GRE PORTAL members site. Open it, sign in, and send your request there. The admin approves every request.</p><div class="row"><a class="btn gold" href="${MEMBERS_URL}" target="_blank" rel="noopener">Open the members site ↗</a></div></div>`;
  if(S.grant===undefined||S.myReq===undefined)return head+`<div class="empty">Checking your access…</div>`;
  const st=reqStatusSelf();
  if(st==="approved"){const books=S.grant.books||[];return head+`<div class="banner" style="background:var(--good-soft);color:var(--good)"><b>Access approved</b><span>Approved on ${fmtDate(S.grant.at)}.</span></div>`+(books.length?`<div class="grid g3">${books.map(b=>bookCard(b,true)).join("")}</div>`:`<div class="empty">You're approved. Resources will appear here as the admin adds them.</div>`)}
  const form=`<div class="sheet stack" style="max-width:640px"><h2>${st==="denied"||st==="revoked"?"Send a new request":"Request library access"}</h2>
    ${st==="denied"?`<div class="banner" style="background:var(--bad-soft);color:var(--bad)">Your last request was declined. You can send a new one.</div>`:""}
    ${st==="revoked"?`<div class="banner" style="background:var(--bad-soft);color:var(--bad)">Your library access was removed. You can send a new request.</div>`:""}
    <div class="grid g2"><label class="f">Full name<input type="text" id="rq-name" maxlength="80" value="${esc(S.myReq&&S.myReq.fullName||S.me&&S.me.name||"")}"></label><label class="f">Email<input type="email" id="rq-email" maxlength="120" value="${esc(S.myReq&&S.myReq.email||"")}"></label></div>
    <div class="grid g2"><label class="f">Planned test date<input type="date" id="rq-date" value="${esc(S.myReq&&S.myReq.testDate||S.prog.profile.testDate||"")}"></label><label class="f">Programme you're applying to<input type="text" id="rq-prog" maxlength="80" value="${esc(S.myReq&&S.myReq.program||"")}" placeholder="e.g. MS Computer Science"></label></div>
    <label class="f">Why do you need access?<textarea id="rq-msg" rows="3" maxlength="500">${esc(S.myReq&&S.myReq.message||"")}</textarea></label>
    <div class="row"><button class="btn gold" data-act="sendReq">Send request</button><span class="muted" style="font-size:13px">${esc(S.libMsg)}</span></div></div>`;
  const preview=`<div class="stack"><span class="eyebrow">In the library</span><div class="grid g3">${[["Quant","Formula & strategy guides"],["Verbal","Reading and vocabulary books"],["Writing","Essay guides and sample responses"]].map(([c,d])=>bookCard({category:c,title:d,desc:"Unlocks after approval."},false)).join("")}</div></div>`;
  if(st==="pending")return head+`<div class="sheet stack" style="max-width:640px"><div class="row"><span class="pill wait">Pending</span><h2>Your request is with the admin</h2></div><p>Sent ${fmtDate(S.myReq.at)}. This page updates on its own once it's approved. Keep practising in the meantime.</p><button class="btn sm ghost" data-act="editReq">Edit request</button></div>`+(S.editReq?form:"")+preview;
  return head+form+preview;
}
async function sendRequest(){
  const v=id=>($("#"+id)||{}).value||"";
  const data={fullName:v("rq-name").trim().slice(0,80),email:v("rq-email").trim().slice(0,120),testDate:v("rq-date"),program:v("rq-prog").trim().slice(0,80),message:v("rq-msg").trim().slice(0,500),at:Date.now()};
  if(!data.fullName||!/^\S+@\S+\.\S+$/.test(data.email)){S.libMsg="Enter your full name and a valid email.";render();return}
  try{await S.db.doc("requests/"+S.uid).set(data);S.libMsg="";S.editReq=false;toast("Request sent")}
  catch(e){S.libMsg=e&&e.code==="invalid_argument"?"Your access level can't send requests. Ask the admin to give you Contributor access to this portal.":"Couldn't send the request. Try again in a moment.";render()}
}

/* ---------- Admin ---------- */
function vAdmin(){
  if(!S.isOwner)return `<div class="empty">This area is for the portal admin.</div>`;
  const t=S.adminTab;
  const tabs=`<div class="row">${[["requests",`Access requests${pendingCount()?" ("+pendingCount()+")":""}`],["catalog","Library catalog"],["students","Student progress"],["reports",`Reported questions${reportCount()?" ("+reportCount()+")":""}`]].map(([k,l])=>`<button class="chip ${t===k?"on":""}" data-act="atab" data-v="${k}">${l}</button>`).join("")}</div>`;
  const head=`<div class="head"><div><div class="eyebrow">Only you can see this</div><h1>Admin Desk</h1><p>Approve library requests, manage what approved students can read, follow everyone's progress and review reported questions.</p></div></div>`;
  if(t==="catalog")return head+tabs+adminCatalog();
  if(t==="students")return head+tabs+adminStudents();
  if(t==="reports")return head+tabs+adminReports();
  const order={pending:0,approved:1,denied:2,revoked:3};
  const reqs=S.requests.slice().sort((a,b)=>order[reqStatus(a)]-order[reqStatus(b)]||(b.at||0)-(a.at||0));
  const nApproved=Object.values(S.grants).filter(g=>g.status==="approved").length;
  return head+tabs+`<div class="grid g3"><div class="sheet stat"><div class="n mono">${pendingCount()}</div><div class="l">waiting for you</div></div><div class="sheet stat"><div class="n mono">${nApproved}</div><div class="l">students with access</div></div><div class="sheet stat"><div class="n mono">${(S.catalog||[]).length}</div><div class="l">resources in the library</div></div></div>
  <div class="sheet">${reqs.length?`<div class="tablebox"><table><thead><tr><th>Student</th><th>Details</th><th>Sent</th><th>Status</th><th></th></tr></thead><tbody>${reqs.map(r=>{const st=reqStatus(r);return `<tr><td><b>${esc(r.fullName)}</b><div class="muted" style="font-size:12.5px">${esc(r.email)}</div><div class="muted" style="font-size:12px">Account: ${esc(nameOf(r.id,"unknown"))}</div></td><td style="max-width:320px;font-size:13.5px">${r.program?`<div>${esc(r.program)}</div>`:""}${r.testDate?`<div class="muted">Test date ${esc(r.testDate)}</div>`:""}${r.message?`<div style="margin-top:4px">"${esc(r.message)}"</div>`:""}</td><td class="mono" style="font-size:12.5px">${fmtDate(r.at)}</td><td><span class="pill ${st==="approved"?"ok":st==="pending"?"wait":"no"}">${st}</span></td><td><div class="row" style="flex-wrap:nowrap">${st==="approved"?`<button class="btn sm danger" data-act="grant" data-id="${esc(r.id)}" data-v="revoked">Revoke</button>`:`<button class="btn sm" data-act="grant" data-id="${esc(r.id)}" data-v="approved">Approve</button>${st==="pending"?`<button class="btn sm ghost" data-act="grant" data-id="${esc(r.id)}" data-v="denied">Decline</button>`:""}`}</div></td></tr>`}).join("")}</tbody></table></div>`:`<div class="empty">No requests yet. Share this portal with your students; their requests show up here as soon as they send them.</div>`}</div>`;
}
function adminCatalog(){
  const books=S.catalog||[];
  return `<div class="grid g2"><div class="sheet stack"><h2>Add a resource</h2>
    <label class="f">Title<input type="text" id="bk-title" maxlength="120"></label>
    <div class="grid g2"><label class="f">Author or source<input type="text" id="bk-author" maxlength="80"></label><label class="f">Category<select id="bk-cat"><option>Quant</option><option>Verbal</option><option>Writing</option><option>General</option></select></label></div>
    <label class="f">Short description<textarea id="bk-desc" rows="2" maxlength="300"></textarea></label>
    <label class="f">Link (Google Drive, website, etc.)<input type="url" id="bk-url" placeholder="https://"></label>
    ${S.assets?`<label class="f">…or upload a file (PDF, image, up to 20 MB)<input type="file" id="bk-file" accept=".pdf,image/*,.txt,.md,.csv"></label>`:""}
    <div class="row"><button class="btn gold" data-act="addBook" ${S.busyBook?"disabled":""}>${S.busyBook?"Uploading…":"Add to library"}</button></div>
    <p class="muted" style="font-size:12.5px">Only add material you have the right to share. Approved students get the link to every resource here, and changes reach them right away.</p></div>
  <div class="sheet stack"><h2>In the library (${books.length})</h2>${books.length?books.map((b,i)=>`<div class="row" style="justify-content:space-between;border-bottom:1px solid var(--rule);padding-bottom:10px;flex-wrap:nowrap"><div style="min-width:0"><b>${esc(b.title)}</b><div class="muted" style="font-size:12.5px">${esc(b.category)} · ${b.kind==="file"?"uploaded file":"link"}${b.author?" · "+esc(b.author):""}</div></div><div class="row" style="flex-wrap:nowrap">${b.url?`<a class="btn sm ghost" href="${esc(safeUrl(b.url))}" target="_blank" rel="noopener">Open</a>`:""}<button class="btn sm danger" data-act="rmBook" data-i="${i}">Remove</button></div></div>`).join(""):`<div class="empty">Nothing here yet.</div>`}</div></div>`;
}
function adminStudents(){
  const ids=Object.keys(S.results).filter(id=>id!==S.uid);
  if(!ids.length)return `<div class="empty">Student progress appears here once students start practising.</div>`;
  const today=dayKey();
  return `<div class="sheet tablebox"><table><thead><tr><th>Student</th><th>Today</th><th>Answered</th><th>Accuracy</th><th>Est. Q / V</th><th>Last full test</th><th>Essays</th><th>Streak</th><th>Library</th></tr></thead><tbody>${ids.map(id=>{const p=normProg(JSON.parse(JSON.stringify(S.results[id])));const o=overall(p);const req=S.requests.find(r=>r.id===id);const g=S.grants[id];const full=p.mocks.filter(m=>m.kind==="full").pop();
    return `<tr><td><b>${esc(p.profile.alias||req&&req.fullName||nameOf(id))}</b>${p.profile.testDate?`<div class="muted" style="font-size:12px">Test ${esc(p.profile.testDate)}</div>`:""}</td><td class="mono">${p.daily[today]||0}${p.d40[today]?" · 40 ✓":""}</td><td class="mono">${o.t}</td><td class="mono">${o.acc}%</td><td class="mono">${estScore(p,"quant")??"—"} / ${estScore(p,"verbal")??"—"}</td><td class="mono">${full?`${full.v??"—"}V ${full.q??"—"}Q ${full.w??"—"}W`:"—"}</td><td class="mono">${p.essays.length}</td><td class="mono">${p.streak||0}</td><td>${g&&g.status==="approved"?`<span class="pill ok">approved</span>`:req?`<span class="pill wait">${esc(reqStatus(req))}</span>`:`<span class="muted">—</span>`}</td></tr>`}).join("")}</tbody></table></div>`;
}
function adminReports(){
  const all=S.reports.flatMap(r=>r.items.map((it,i)=>({uid:r.id,i,...it}))).sort((a,b)=>b.at-a.at);
  if(!all.length)return `<div class="empty">No reported questions. Students can flag any question from their results page.</div>`;
  return `<div class="sheet">${all.map(r=>{const q=r.q||qById(r.qid);return `<div class="review-item"><div class="row" style="justify-content:space-between"><div class="row"><span class="pill no">${esc(r.reason)}</span><span class="muted" style="font-size:12.5px">${esc(nameOf(r.uid))} · ${fmtDate(r.at)}</span>${q&&q.ai?`<span class="pill wait">AI-written</span>`:q&&q.gen?`<span class="pill ok">generated</span>`:`<span class="pill neu">bank</span>`}</div><button class="btn sm ghost" data-act="dismissReport" data-u="${esc(r.uid)}" data-i="${r.i}">Dismiss</button></div>
    ${q?`<div style="margin-top:10px">${passageOf(q)?`<details><summary style="cursor:pointer;font-size:13px">Show passage</summary><div class="passage" style="font-family:Georgia,serif;font-size:14px">${passageOf(q).text}</div></details>`:""}${questionHTML(q,null,{ok:true})}<div class="explain"><b>Explanation.</b> ${q.gen?q.ex:esc(q.ex)}</div></div>`:`<p class="muted">Question ${esc(r.qid)} is no longer available.</p>`}</div>`}).join("")}</div>`;
}
async function dismissReport(uid,i){const r=S.reports.find(x=>x.id===uid);if(!r)return;const items=r.items.slice();items.splice(i,1);try{await S.db.doc("reports/"+uid).set({items});toast("Dismissed")}catch(e){toast("Couldn't update that report.")}}
let grantQueue=Promise.resolve();
function setGrant(id,status){
  grantQueue=grantQueue.then(async()=>{
    const data={status,at:Date.now(),books:status==="approved"?JSON.parse(JSON.stringify(S.catalog||[])):[]};
    try{await S.db.doc("grants/"+id).set(data);toast(status==="approved"?"Access approved":status==="denied"?"Request declined":"Access revoked")}catch(e){toast("Couldn't save that change. Try again.")}
  });
}
async function writeCatalog(books){
  try{await S.db.doc("catalog/main").set({books,updatedAt:Date.now()});S.catalog=books}catch(e){toast("Couldn't save the catalog.");return}
  const approved=Object.entries(S.grants).filter(([,g])=>g.status==="approved");
  for(const [id,g] of approved){try{await S.db.doc("grants/"+id).set({status:"approved",at:g.at,books:JSON.parse(JSON.stringify(books))})}catch(e){}}
  render();
}
async function addBook(){
  const v=id=>(($("#"+id)||{}).value||"").trim();const title=v("bk-title");if(!title){toast("Give the resource a title");return}
  let url=v("bk-url"),kind="link";const f=$("#bk-file");const file=f&&f.files&&f.files[0];
  if(url&&!/^https?:\/\//i.test(url)){toast("Links must start with https://");return}
  if(file&&S.assets){S.busyBook=true;render();try{const up=await S.assets.upload(file);url=up.url;kind="file"}catch(e){S.busyBook=false;render();toast("Upload failed. Check the file is under 20 MB.");return}S.busyBook=false}
  const book={id:"b"+Date.now(),title:title.slice(0,120),author:v("bk-author").slice(0,80),category:v("bk-cat")||"General",desc:v("bk-desc").slice(0,300),url,kind,addedAt:Date.now()};
  await writeCatalog([...(S.catalog||[]),book]);toast("Added to library");
}

/* ---------- Who's online (live presence) ---------- */
const VIEW_LABEL={dashboard:"Dashboard",practice:"Practice",mock:"GRE Test",writing:"Writing",vocab:"Vocabulary",calendar:"Study Calendar",tools:"Study Tools",messages:"Messages",library:"Library",admin:"Admin Desk",test:"Taking a test"};
function setPresence(){if(!S.room)return;try{S.room.presence({v:S.exam?"test":S.view,uid:S.uid||null}).catch(()=>{})}catch(e){}}
function activePeople(){const m=new Map();for(const p of S.peers){const id=p.by||(p.presence&&p.presence.uid)||p.peer;const v=p.presence&&p.presence.v;const cur=m.get(id);if(!cur)m.set(id,{id,isMe:p.isMe,guest:p.guest,views:new Set(v?[v]:[]),since:p.updatedAt});else if(v)cur.views.add(v)}return[...m.values()]}
function personName(id){const req=S.requests.find(r=>r.id===id);const b=S.board.find(x=>x.id===id);return nameOf(id,"")||(b&&b.alias)||(req&&req.fullName)||"Student"}
function presenceHTML(){
  if(!S.room)return `<p class="muted" style="font-size:13.5px">Live presence isn't available in this view.</p>`;
  const ppl=activePeople().sort((a,b)=>(a.isMe?1:0)-(b.isMe?1:0));
  const recent=S.board.filter(b=>b.at&&Date.now()-b.at<24*36e5&&!ppl.some(p=>p.id===b.id)).sort((a,b)=>b.at-a.at).slice(0,6);
  return `<div class="row" style="justify-content:space-between"><span class="live">${ppl.length} online now</span></div>
  <div class="people"><ul>${ppl.map(p=>`<li><img src="${esc((S.profiles[p.id]||{}).avatarUrl||"")}" alt=""><span style="flex:1;min-width:0">${esc(personName(p.id))}${p.isMe?` <span class="pill neu">you</span>`:""}${p.guest?` <span class="pill wait">guest</span>`:""}<small class="muted" style="display:block;font-size:12px">${[...p.views].map(v=>VIEW_LABEL[v]||v).join(", ")||"Just arrived"}</small></span>${!p.isMe&&S.isOwner&&S.db?`<button class="btn sm ghost" data-act="msgStudent" data-id="${esc(p.id)}">Message</button>`:""}</li>`).join("")||`<li class="muted">Nobody else is here right now.</li>`}</ul></div>
  ${recent.length?`<div class="eyebrow" style="margin-top:6px">Active in the last 24 hours</div><div class="mini"><ul>${recent.map(b=>`<li><span style="flex:1">${esc(personName(b.id))}</span><span class="mono muted" style="font-size:12px">${agoText(b.at)}</span></li>`).join("")}</ul></div>`:""}`;
}
function agoText(t){const m=Math.round((Date.now()-t)/6e4);return m<1?"just now":m<60?m+" min ago":Math.round(m/60)+" h ago"}
function updatePresenceUI(){
  const box=document.getElementById("presenceBox");if(box)box.innerHTML=presenceHTML();
  const oc=document.getElementById("onlineCount");if(oc){const n=activePeople().length;oc.innerHTML=S.room&&n>1?`<span class="live">${n} studying now</span>`:""}
}

/* ---------- Messages ---------- */
let threadUnsub=null;
function unreadCount(){if(S.isOwner)return S.threads.filter(t=>t.lastFrom==="student"&&(t.lastAt||0)>(t.adminSeen||0)).length;const t=S.myThread;return t&&t.lastFrom==="admin"&&(t.lastAt||0)>(t.studentSeen||0)?1:0}
function subscribeMessages(){
  if(!S.db||!S.uid)return;
  if(S.isOwner){S.db.collection("threads").onSnapshot(s=>{S.threads=s.docs.map(d=>({id:d.id,...d.data()})).sort((a,b)=>(b.lastAt||0)-(a.lastAt||0));resolveNames(S.threads.map(t=>t.id));renderNav();updateInboxUI()},()=>{})}
  else{
    S.db.doc("threads/"+S.uid).onSnapshot(s=>{S.myThread=s.exists?s.data():null;renderNav()},()=>{});
    S.db.collection("threads/"+S.uid+"/msgs").orderBy("at").limit(400).onSnapshot(s=>{S.msgs=s.docs.map(d=>({id:d.id,...d.data()}));renderChatLog();markRead()},()=>{});
  }
}
function openThread(id){if(!S.db)return;S.openThread=id;if(threadUnsub)threadUnsub();S.msgs=[];
  threadUnsub=S.db.collection("threads/"+id+"/msgs").orderBy("at").limit(400).onSnapshot(s=>{S.msgs=s.docs.map(d=>({id:d.id,...d.data()}));renderChatLog();markRead()},()=>{});
  if(S.view==="messages")render()}
let readBusy=false;
function markRead(){
  if(S.view!=="messages"||!S.db||readBusy)return;const sid=S.isOwner?S.openThread:S.uid;if(!sid)return;
  const th=S.isOwner?S.threads.find(x=>x.id===sid):S.myThread;if(!th)return;const key=S.isOwner?"adminSeen":"studentSeen";
  if((th[key]||0)>=(th.lastAt||0))return;readBusy=true;
  S.db.doc("threads/"+sid).update({[key]:Date.now()}).catch(()=>{}).finally(()=>{readBusy=false});
}
async function sendMsg(){
  const t=$("#msgIn");const text=(t&&t.value||"").trim().slice(0,2000);if(!text)return;
  const sid=S.isOwner?S.openThread:S.uid;if(!sid)return;const from=S.isOwner?"admin":"student";const at=Date.now();
  t.value="";
  try{
    await S.db.collection("threads/"+sid+"/msgs").add({from,text,at});
    const meta={lastAt:at,lastText:text.slice(0,140),lastFrom:from};meta[S.isOwner?"adminSeen":"studentSeen"]=at;
    const exists=S.isOwner?S.threads.some(x=>x.id===sid):!!S.myThread;
    if(exists)await S.db.doc("threads/"+sid).update(meta);else await S.db.doc("threads/"+sid).set(meta);
  }catch(e){t.value=text;toast(e&&e.code==="invalid_argument"?"Your access level can't send messages. Ask the admin for Contributor access.":"Message not sent. Try again.")}
}
function renderChatLog(){
  const el=document.getElementById("chatLog");if(!el)return;
  const mine=S.isOwner?"admin":"student";
  el.innerHTML=S.msgs.length?S.msgs.map(m=>`<div class="msg ${m.from===mine?"me":"them"}">${esc(m.text)}<small>${m.from===mine?"You":m.from==="admin"?"Admin":esc(personName(S.openThread))} · ${new Date(m.at).toLocaleString(undefined,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}</small></div>`).join(""):`<div class="muted" style="margin:auto;text-align:center;font-size:14px">${S.isOwner?"No messages in this conversation yet.":"Send the admin a question about your studies, library access or the portal. Replies show up here."}</div>`;
  el.scrollTop=el.scrollHeight;
}
function inboxHTML(){
  if(!S.threads.length)return `<div class="empty" style="padding:18px">No messages yet. When a student writes to you, the conversation appears here.</div>`;
  return `<div class="inbox">${S.threads.map(t=>{const un=t.lastFrom==="student"&&(t.lastAt||0)>(t.adminSeen||0);return `<button class="${S.openThread===t.id?"on":""}" data-act="openThread" data-id="${esc(t.id)}"><img src="${esc((S.profiles[t.id]||{}).avatarUrl||"")}" alt=""><span class="t"><b>${esc(personName(t.id))}</b><span>${t.lastFrom==="admin"?"You: ":""}${esc(t.lastText||"")}</span></span>${un?`<span class="udot" title="Unread"></span>`:`<span class="mono muted" style="font-size:11px">${agoText(t.lastAt||0)}</span>`}</button>`}).join("")}</div>`;
}
function updateInboxUI(){const el=document.getElementById("inboxBox");if(el)el.innerHTML=inboxHTML();const op=document.getElementById("ownerMsgs");if(op)op.innerHTML=ownerMsgsHTML()}
function vMessages(){
  const head=`<div class="head"><div><div class="eyebrow">${S.isOwner?"Your inbox":"Direct messages"}</div><h1>Messages</h1><p>${S.isOwner?"Conversations with your students. Replies reach them right away.":"Write privately to the portal admin. Only you and the admin can read this conversation."}</p></div></div>`;
  if(!S.ready)return head+`<div class="empty">Loading…</div>`;
  if(!S.db||!S.uid)return head+`<div class="sheet stack" style="max-width:640px"><p>Messaging runs on the ALFREDO GRE PORTAL members site. Open it and sign in to message the admin.</p>${typeof MEMBERS_URL!=="undefined"?`<div class="row"><a class="btn gold" href="${MEMBERS_URL}" target="_blank" rel="noopener">Open the members site ↗</a></div>`:""}</div>`;
  const composer=`<div class="composer"><textarea id="msgIn" rows="2" maxlength="2000" placeholder="Write a message… (Enter to send, Shift+Enter for a new line)"></textarea><button class="btn gold" data-act="sendMsg">Send</button></div>`;
  if(!S.isOwner)return head+`<div class="sheet stack" style="max-width:760px"><div class="row" style="justify-content:space-between"><h2>Portal admin</h2>${S.writeBlocked?`<span class="pill no">view-only access</span>`:""}</div><div class="chat" id="chatLog"></div>${composer}</div>`;
  const who=S.openThread;
  return head+`<div class="msgsplit"><div class="sheet stack" style="padding:12px"><span class="eyebrow">Conversations</span><div id="inboxBox">${inboxHTML()}</div></div>
  <div class="sheet stack">${who?`<div class="row" style="justify-content:space-between"><h2>${esc(personName(who))}</h2>${(()=>{const r=S.requests.find(x=>x.id===who);return r?`<span class="muted" style="font-size:13px">${esc(r.email||"")}</span>`:""})()}</div><div class="chat" id="chatLog"></div>${composer}`:`<div class="empty">Choose a conversation to read and reply.</div>`}</div></div>`;
}

/* ---------- Owner overview on the dashboard ---------- */
function ownerMsgsHTML(){const un=S.threads.filter(t=>t.lastFrom==="student"&&(t.lastAt||0)>(t.adminSeen||0));const list=(un.length?un:S.threads).slice(0,5);
  return list.length?`<div class="mini"><ul>${list.map(t=>`<li>${un.includes(t)?`<span class="udot"></span>`:""}<span style="flex:1;min-width:0"><b>${esc(personName(t.id))}</b><small class="muted" style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(t.lastText||"")}</small></span><button class="btn sm ghost" data-act="msgStudent" data-id="${esc(t.id)}">${un.includes(t)?"Reply":"Open"}</button></li>`).join("")}</ul></div>`:`<p class="muted" style="font-size:13.5px">No messages yet.</p>`}
function ownerPanel(){
  const pend=S.requests.filter(r=>reqStatus(r)==="pending").sort((a,b)=>(b.at||0)-(a.at||0));
  return `<div class="grid g3">
  <div class="sheet stack"><div class="row" style="justify-content:space-between"><h2>Access requests</h2>${pend.length?`<span class="pill wait">${pend.length} waiting</span>`:""}</div>
    ${pend.length?`<div class="mini"><ul>${pend.slice(0,5).map(r=>`<li><span style="flex:1;min-width:0"><b>${esc(r.fullName)}</b><small class="muted" style="display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(r.email)}${r.program?" · "+esc(r.program):""}</small></span><button class="btn sm" data-act="grant" data-id="${esc(r.id)}" data-v="approved">Approve</button><button class="btn sm ghost" data-act="grant" data-id="${esc(r.id)}" data-v="denied">Decline</button></li>`).join("")}</ul></div>${pend.length>5?`<a class="btn sm ghost" href="#admin" data-act="nav" data-v="admin">See all ${pend.length}</a>`:""}`:`<p class="muted" style="font-size:13.5px">No requests waiting. New library requests appear here the moment a student sends one.</p>`}</div>
  <div class="sheet stack"><div class="row" style="justify-content:space-between"><h2>Messages</h2>${unreadCount()?`<span class="pill wait">${unreadCount()} unread</span>`:""}</div><div id="ownerMsgs">${ownerMsgsHTML()}</div><a class="btn sm ghost" href="#messages" data-act="nav" data-v="messages" style="align-self:flex-start">Open inbox</a></div>
  <div class="sheet stack"><h2>Active now</h2><div id="presenceBox">${presenceHTML()}</div></div>
  </div>`;
}

/* ---------- Study calendar ---------- */
const CAL_TYPES={quant:["Quant","var(--navy)"],verbal:["Verbal","var(--good)"],writing:["Writing","var(--accent)"],vocab:["Vocabulary","var(--violet)"],test:["Full test","var(--bad)"],review:["Review","var(--ink-2)"]};
const DOW=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
function calMonth(){if(!S.cal.month){const d=new Date();S.cal.month=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")}return S.cal.month}
function calItems(k){return (S.prog.cal[k]||[]).slice().sort((a,b)=>(a.time||"99").localeCompare(b.time||"99"))}
function calTodayHTML(){const k=dayKey();const items=calItems(k);if(!items.length)return `<div class="row" style="margin-top:10px;font-size:13px"><span class="muted">Nothing on your study calendar today.</span><a class="btn sm ghost" href="#calendar" data-act="nav" data-v="calendar">Plan my calendar</a></div>`;
  return `<div class="eyebrow" style="margin-top:12px">From your study calendar</div>${items.map(it=>`<div class="check ${it.done?"done":""}" data-act="calToggle" data-d="${k}" data-id="${esc(it.id)}"><span class="bx">${it.done?"✓":""}</span><span class="tl"><span class="tdot" style="--c:${CAL_TYPES[it.type]?CAL_TYPES[it.type][1]:"var(--ink-2)"}"></span> ${esc(it.title)}<small>${it.time?esc(it.time)+" · ":""}${it.mins} min</small></span></div>`).join("")}`}
function vCalendar(){
  const [y,m]=calMonth().split("-").map(Number);const first=new Date(y,m-1,1);const start=new Date(first);start.setDate(1-((first.getDay()+6)%7));
  const sel=S.cal.sel||dayKey();const today=dayKey();const test=S.prog.profile.testDate;
  const cells=[];for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);cells.push(d)}
  const trimmed=cells[35].getMonth()!==m-1?cells.slice(0,35):cells;
  const monthName=first.toLocaleDateString(undefined,{month:"long",year:"numeric"});
  let totalMin=0,doneMin=0;Object.entries(S.prog.cal).forEach(([k,arr])=>{if(k.startsWith(calMonth()))arr.forEach(it=>{totalMin+=it.mins||0;if(it.done)doneMin+=it.mins||0})});
  const items=calItems(sel);const selDate=new Date(sel+"T00:00");
  return `<div class="head"><div><div class="eyebrow">Plan your study</div><h1>Study calendar</h1><p>Schedule sessions, tick them off as you go, or let the portal fill your calendar up to test day around the days you can study.</p></div>
  <div class="row"><button class="btn ghost sm" data-act="calMonth" data-v="-1" aria-label="Previous month">‹</button><b style="min-width:150px;text-align:center">${esc(monthName)}</b><button class="btn ghost sm" data-act="calMonth" data-v="1" aria-label="Next month">›</button><button class="btn sm" data-act="calToday">Today</button></div></div>
  <div class="grid" style="grid-template-columns:minmax(0,1fr) 320px;align-items:start" id="calLayout">
  <div class="sheet stack" style="padding:14px">
    <div class="calgrid">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>`<div class="dow">${d}</div>`).join("")}
    ${trimmed.map(d=>{const k=dayKey(d);const its=calItems(k);return `<button class="cday ${d.getMonth()!==m-1?"out":""} ${k===today?"today":""} ${k===sel?"sel":""}" data-act="calSel" data-d="${k}" aria-label="${d.toDateString()}"><span class="dn">${d.getDate()}${k===test?" 🎯":""}</span>${its.slice(0,3).map(it=>`<span class="ev ${it.done?"done":""}" style="--c:${CAL_TYPES[it.type]?CAL_TYPES[it.type][1]:"var(--ink-2)"}">${esc(it.title)}</span>`).join("")}${its.length>3?`<span class="more">+${its.length-3} more</span>`:""}<span class="dots">${its.map(it=>`<i class="tdot" style="--c:${CAL_TYPES[it.type]?CAL_TYPES[it.type][1]:"var(--ink-2)"}"></i>`).join("")}</span></button>`}).join("")}</div>
    <div class="row" style="font-size:12.5px">${Object.values(CAL_TYPES).map(([l,c])=>`<span class="row" style="gap:5px"><span class="tdot" style="--c:${c}"></span>${l}</span>`).join("")}<span class="muted" style="margin-left:auto">${Math.round(doneMin/60*10)/10} of ${Math.round(totalMin/60*10)/10} h done this month</span></div>
  </div>
  <div class="stack" style="gap:16px">
    <div class="sheet stack"><div><span class="eyebrow">${sel===today?"Today":selDate.toLocaleDateString(undefined,{weekday:"long"})}</span><h2>${selDate.toLocaleDateString(undefined,{month:"long",day:"numeric"})}${sel===test?" · Test day":""}</h2></div>
      <div>${items.length?items.map(it=>`<div class="citem ${it.done?"done":""}"><span class="check ${it.done?"done":""}" style="border:0;padding:0" data-act="calToggle" data-d="${sel}" data-id="${esc(it.id)}"><span class="bx">${it.done?"✓":""}</span></span><span class="tdot" style="--c:${CAL_TYPES[it.type]?CAL_TYPES[it.type][1]:"var(--ink-2)"}"></span><span class="tl"><b>${esc(it.title)}</b><small class="muted" style="display:block;font-size:12px">${it.time?esc(it.time)+" · ":""}${it.mins} min${it.auto?" · auto-planned":""}</small></span><button class="btn sm ghost" data-act="calDel" data-d="${sel}" data-id="${esc(it.id)}" aria-label="Delete session">✕</button></div>`).join(""):`<p class="muted" style="font-size:13.5px">No sessions planned for this day.</p>`}</div>
      <div class="stack" style="gap:8px;border-top:1px solid var(--rule);padding-top:12px"><span class="eyebrow">Add a session</span>
        <div class="grid g2" style="gap:8px"><select id="ctype" aria-label="Session type">${Object.entries(CAL_TYPES).map(([k,[l]])=>`<option value="${k}">${l}</option>`).join("")}</select><input type="text" id="ctime" placeholder="Time, e.g. 7:00 PM" maxlength="12" aria-label="Time"></div>
        <input type="text" id="ctitle" placeholder="What will you study? e.g. Geometry drill" maxlength="80" aria-label="Session title">
        <div class="row"><label class="f" style="flex-direction:row;align-items:center;gap:8px">Minutes<input type="number" id="cmins" value="45" min="10" max="300" style="width:90px"></label><button class="btn gold" data-act="calAdd">Add</button></div></div>
    </div>
    <div class="sheet stack"><h3>Auto-plan to test day</h3><p class="muted" style="font-size:13.5px">${test?`Test date ${esc(test)}. `:"No test date set, so this plans six weeks. "}Uses your ${S.prog.profile.hours} hours a week and weakest topics. It only fills days that have no auto-planned sessions yet.</p>
      <div class="row" style="gap:6px">${[1,2,3,4,5,6,0].map(n=>`<button class="chip ${S.prog.calDays.includes(n)?"on":""}" data-act="calDay" data-v="${n}">${DOW[n]}</button>`).join("")}</div>
      <div class="row"><button class="btn" data-act="calAuto" ${S.prog.calDays.length?"":"disabled"}>Fill my calendar</button><button class="btn ghost sm" data-act="calClear">Clear auto-planned</button></div>
      ${!window.claude?`<button class="btn ghost sm" data-act="calIcs" style="align-self:flex-start">Download for Google/Apple Calendar (.ics)</button>`:""}
      <a class="muted" style="font-size:12.5px" href="#tools" data-act="nav" data-v="tools">Change hours per week or test date in Study Tools</a></div>
  </div></div>
  <style>@media (max-width:900px){#calLayout{grid-template-columns:minmax(0,1fr)!important}}</style>`;
}
function calAdd(){
  const k=S.cal.sel||dayKey();const type=$("#ctype").value;const title=($("#ctitle").value||"").trim().slice(0,80)||CAL_TYPES[type][0]+" practice";
  const mins=Math.max(10,Math.min(300,+$("#cmins").value||45));const time=($("#ctime").value||"").trim().slice(0,12);
  (S.prog.cal[k]||(S.prog.cal[k]=[])).push({id:"c"+Date.now().toString(36),type,title,mins,time,done:false});saveProg();render();toast("Session added");
}
function calAuto(){
  const p=S.prog;const today=new Date();today.setHours(0,0,0,0);
  const end=p.profile.testDate?new Date(p.profile.testDate+"T00:00"):new Date(today.getTime()+42*864e5);
  if(end<=today){toast("Your test date has passed. Update it in Study Tools.");return}
  const days=[];for(let d=new Date(today);d<end&&days.length<200;d.setDate(d.getDate()+1)){if(p.calDays.includes(d.getDay()))days.push(new Date(d))}
  if(!days.length){toast("Pick at least one study day");return}
  const perWeek=Math.max(1,p.calDays.length);const mins=Math.max(30,Math.round(p.profile.hours*60/perWeek/15)*15);
  const wq=weakTopics("quant",4),wv=weakTopics("verbal",3);let added=0;
  days.forEach((d,i)=>{const k=dayKey(d);const arr=p.cal[k]||(p.cal[k]=[]);if(arr.some(x=>x.auto))return;const left=days.length-i;const mk=(type,title,m)=>arr.push({id:"a"+k.replace(/-/g,"")+arr.length,type,title,mins:m,time:"",done:false,auto:true});
    if(left<=2){mk("review","Light review: error log + formulas",Math.min(mins,45));mk("vocab","Vocabulary: 30 cards",15)}
    else if(i%7===6&&mins>=60){mk("test","Full GRE test + review misses",Math.max(mins,150))}
    else{const r=i%5;if(r===0||r===2)mk("quant",`Quant: ${wq[(i>>1)%wq.length]} + Today's 40`,Math.round(mins*.75/5)*5);else if(r===1||r===3)mk("verbal",`Verbal: ${wv[(i>>1)%wv.length]} + Today's 40`,Math.round(mins*.75/5)*5);else mk("writing","Timed Issue essay",Math.min(45,mins));
      mk("vocab","Vocabulary: 30 cards",15)}
    added++});
  saveProg();render();toast(added?`Planned ${added} study days`:"Your calendar is already planned");
}
function exportICS(){
  const pad=n=>String(n).padStart(2,"0");const lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//ALFREDO GRE PORTAL//Study Calendar//EN"];
  const t=dayKey();const stamp=new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d+/,"");
  Object.entries(S.prog.cal).forEach(([k,arr])=>{if(k<t)return;arr.forEach(it=>{let h=18,mi=0;const mm=(it.time||"").match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)?/i);if(mm){h=+mm[1];mi=+(mm[2]||0);if(mm[3]&&/pm/i.test(mm[3])&&h<12)h+=12;if(mm[3]&&/am/i.test(mm[3])&&h===12)h=0}
    const s=new Date(k+"T00:00");s.setHours(h,mi);const e=new Date(s.getTime()+(it.mins||45)*6e4);const f=d=>d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+"T"+pad(d.getHours())+pad(d.getMinutes())+"00";
    lines.push("BEGIN:VEVENT","UID:"+it.id+"-"+k+"@alfredo-gre","DTSTAMP:"+stamp,"DTSTART:"+f(s),"DTEND:"+f(e),"SUMMARY:GRE · "+String(it.title).replace(/[,;\\]/g," "),"END:VEVENT")})});
  lines.push("END:VCALENDAR");
  try{const url=URL.createObjectURL(new Blob([lines.join("\r\n")],{type:"text/calendar"}));const a=document.createElement("a");a.href=url;a.download="alfredo-gre-study-plan.ics";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)}catch(e){toast("Couldn't create the calendar file.")}
}

/* ============================== EVENTS ============================== */
function curAnsStore(){return S.exam?exSec().ans:S.session&&S.session.ans}
function rerenderQ(){S.exam?renderExam():render()}
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-act]");if(!el||el.disabled)return;const act=el.dataset.act;const d=el.dataset;
  if(act.startsWith("x")&&S.exam){examAct(act,d,el);return}
  const s=S.session;
  switch(act){
    case "nav":e.preventDefault();go(d.v);break;
    case "go":go(d.v);break;
    case "daily40":S.lastResult=null;startDaily();break;
    case "drill":{const t=d.arg;S.setup=Object.assign(S.setup,{sec:TOPICS.quant.includes(t)?"quant":"verbal",topics:[t],diff:0,count:20,mistakes:false});S.lastResult=null;startPractice(TOPICS.quant.includes(t)?"q20":"v20");break}
    case "hard":S.setup=Object.assign(S.setup,{sec:"mixed",topics:[],diff:3,count:10,mistakes:false});S.lastResult=null;startPractice("hard");break;
    case "mistakes":if(!S.prog.errors.length){toast("Your error log is empty");break}S.setup=Object.assign(S.setup,{sec:"mixed",topics:[],diff:0,mistakes:true,count:40});S.lastResult=null;startPractice("err");S.setup.mistakes=false;break;
    case "task":{const today=dayKey();const tk=S.prog.tasks[today]||(S.prog.tasks[today]={});tk[d.k]=!tk[d.k];saveProg();render();break}
    case "aiGen":ensureAi(true,"daily");break;
    case "saveProfile":{const p=S.prog.profile;p.alias=$("#pf-alias").value.trim().slice(0,40);p.testDate=$("#pf-date").value;p.targetQ=clampScore($("#pf-q").value);p.targetV=clampScore($("#pf-v").value);saveProg();renderWho();render();toast("Profile saved");break}
    case "setSec":S.setup.sec=d.v;S.setup.topics=[];render();break;
    case "setTopic":{const t=S.setup.topics;const i=t.indexOf(d.v);i>=0?t.splice(i,1):t.push(d.v);render();break}
    case "setDiff":S.setup.diff=+d.v;render();break;
    case "setCount":S.setup.count=+d.v;render();break;
    case "toggleTimed":S.setup.timed=!S.setup.timed;render();break;
    case "toggleMistakes":S.setup.mistakes=!S.setup.mistakes;render();break;
    case "startPractice":startPractice();break;
    case "pick":curAnsStore()[curQ().id]=+d.i;rerenderQ();break;
    case "toggle":{const q=curQ(),st=curAnsStore();const a=(st[q.id]||[]).slice();const i=+d.i;const k=a.indexOf(i);if(k>=0)a.splice(k,1);else{if(q.k==="se"&&a.length>=2)a.shift();a.push(i)}st[q.id]=a;rerenderQ();break}
    case "blank":{const q=curQ(),st=curAnsStore();const a=(st[q.id]||[]).slice();a[+d.b]=+d.i;st[q.id]=a;rerenderQ();break}
    case "mark":{const id=curQ().id;const i=s.marked.indexOf(id);i>=0?s.marked.splice(i,1):s.marked.push(id);render();break}
    case "next":stampTime();if(s.idx<s.qs.length-1){s.idx++;render()}else{s.review=true;s.confirm=true;render()}break;
    case "prev":stampTime();if(s.idx>0){s.idx--;render()}break;
    case "review":stampTime();s.review=true;s.confirm=false;render();break;
    case "unreview":s.review=false;s.qstart=Date.now();render();break;
    case "jump":s.idx=+d.i;s.review=false;s.qstart=Date.now();render();break;
    case "submitConfirm":s.confirm=true;render();break;
    case "cancelSubmit":s.confirm=false;render();break;
    case "submit":finishSection();break;
    case "toggleTime":if(s){s.showTimer=!s.showTimer}break;
    case "quit":clearInterval(tickH);S.session=null;S.calc.open=false;render();toast("Session ended");break;
    case "again":S.lastResult=null;render();break;
    case "retryWrong":{const wrong=S.lastResult.items.filter(i=>!i.ok).map(i=>i.q);S.lastResult=null;startSession(groupUnits(wrong).flat(),{mode:"practice",label:"Retry missed questions",limit:0});break}
    case "tutor":askTutor(d.q,d.a);break;
    case "reportOpen":S.reportOpen=d.q;render();break;
    case "reportSend":sendReport(d.q);break;
    case "startExam":startExam(d.v);break;
    case "mockHome":S.lastResult=null;render();break;
    case "calc":S.calc.open=!S.calc.open;if(S.exam)renderExam();else{renderCalc();if(S.session||S.view==="tools")render()}break;
    case "ck":calcKey(d.k);break;
    case "essayPick":S.essay={pid:d.v,text:lsGet("alfredo.draft."+d.v)||"",start:null,dur:1800,result:null,busy:false};render();window.scrollTo(0,0);break;
    case "essayStart":S.essay.start=Date.now();render();break;
    case "essayExit":clearInterval(essayH);S.essay={pid:null,text:"",start:null,dur:1800,result:null,busy:false};render();break;
    case "essaySubmit":submitEssay();break;
    case "selfCheck":{const c=S.essay.result.checks;c[+d.i]=!c[+d.i];render();break}
    case "saveSelf":{const e=S.essay;S.prog.essays.push({at:Date.now(),pid:e.pid,words:(e.text.match(/\S+/g)||[]).length,score:selfScore(e.result.checks),text:e.text.slice(0,5000)});touchStreak();S.prog.xp+=30;doneTask("essay");trimProg();saveProg();toast("Essay saved");S.essay={pid:null,text:"",start:null,dur:1800,result:null,busy:false};render();break}
    case "vmode":S.vocab.mode=d.v;S.vocab.flip=false;render();break;
    case "vflip":S.vocab.flip=!S.vocab.flip;el.classList.toggle("flip",S.vocab.flip);break;
    case "vgrade":{const w=d.w,st=vocabState(w);const nb=d.v==="1"?Math.min(4,st.b+1):1;S.prog.vocab[w]={b:nb,due:Date.now()+INTERVALS[nb]*864e5-36e5};S.prog.xp+=d.v==="1"?2:1;touchStreak();
      const vd=S.prog.vocabDay&&S.prog.vocabDay.d===dayKey()?S.prog.vocabDay:{d:dayKey(),n:0};vd.n++;S.prog.vocabDay=vd;if(vd.n>=30)doneTask("vocab");
      S.vocab.flip=false;S.vocab.i++;saveProg();render();break}
    case "vpick":{const qz=S.vocab.quiz;qz.picked=+d.i;if(qz.picked===qz.ans){qz.score++;S.prog.xp+=3}qz.n++;saveProg();render();break}
    case "vnext":newQuiz();render();break;
    case "savePlan":{const p=S.prog.profile;p.hours=Math.max(2,Math.min(40,+$("#pl-hours").value||8));p.testDate=$("#pl-date").value;saveProg();render();toast("Plan updated");break}
    case "sendReq":sendRequest();break;
    case "editReq":S.editReq=!S.editReq;render();break;
    case "atab":S.adminTab=d.v;render();break;
    case "grant":setGrant(d.id,d.v);break;
    case "addBook":addBook();break;
    case "rmBook":{const b=(S.catalog||[]).slice();b.splice(+d.i,1);writeCatalog(b);toast("Removed");break}
    case "dismissReport":dismissReport(d.u,+d.i);break;
    case "sendMsg":sendMsg();break;
    case "openThread":openThread(d.id);break;
    case "msgStudent":go("messages");openThread(d.id);break;
    case "calMonth":{const [y,m]=calMonth().split("-").map(Number);const dt=new Date(y,m-1+(+d.v),1);S.cal.month=dt.getFullYear()+"-"+String(dt.getMonth()+1).padStart(2,"0");render();break}
    case "calToday":S.cal.month=null;S.cal.sel=dayKey();render();break;
    case "calSel":S.cal.sel=d.d;render();break;
    case "calAdd":calAdd();break;
    case "calToggle":{const it=(S.prog.cal[d.d]||[]).find(x=>x.id===d.id);if(it){it.done=!it.done;if(it.done){S.prog.xp+=5;touchStreak()}saveProg();render()}break}
    case "calDel":{S.prog.cal[d.d]=(S.prog.cal[d.d]||[]).filter(x=>x.id!==d.id);saveProg();render();break}
    case "calDay":{const n=+d.v,a=S.prog.calDays;const i=a.indexOf(n);i>=0?a.splice(i,1):a.push(n);saveProg();render();break}
    case "calAuto":calAuto();break;
    case "calClear":{const t=dayKey();Object.keys(S.prog.cal).forEach(k=>{if(k>=t)S.prog.cal[k]=S.prog.cal[k].filter(x=>!x.auto||x.done)});saveProg();render();toast("Cleared the auto-planned sessions");break}
    case "calIcs":exportICS();break;
  }
});
document.addEventListener("input",e=>{
  const t=e.target;
  if(t.id==="numIn"){const st=curAnsStore();if(st&&curQ())st[curQ().id]=t.value}
  else if(t.id==="scratch"&&S.session){S.session.scratch=t.value}
  else if(t.id==="xEssay"&&S.exam){S.exam.essay.text=t.value;clearTimeout(t._h);t._h=setTimeout(essayHist,500)}
  else if(t.id==="essayIn"){S.essay.text=t.value;const wc=(t.value.match(/\S+/g)||[]).length;const w=$("#wc");if(w)w.textContent=wc+" words";const b=document.querySelector('[data-act="essaySubmit"]');if(b)b.disabled=wc<50||S.essay.busy;clearTimeout(t._t);t._t=setTimeout(()=>lsSet("alfredo.draft."+S.essay.pid,S.essay.text),600)}
});
document.addEventListener("keydown",e=>{
  const tg=e.target;if(tg.id==="msgIn"&&e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg();return}if(tg.classList&&tg.classList.contains("card3d")&&(e.key==="Enter"||e.key===" ")){e.preventDefault();tg.click();return}
  if(/INPUT|TEXTAREA|SELECT/.test(tg.tagName)||e.metaKey||e.ctrlKey||e.altKey)return;
  const inExam=S.exam&&exSec()&&exSec().phase==="q"&&!exSec().review&&exSec().type!=="awa"&&!S.exam.modal;
  const inPrac=S.view==="practice"&&S.session&&!S.session.review;
  if(!inExam&&!inPrac)return;const q=curQ();if(!q)return;const k=e.key.toUpperCase();
  const li="ABCDEFGH".indexOf(k);const ni="12345678".indexOf(k);const i=li>=0?li:ni;
  if(i>=0&&(q.k==="mc"||q.k==="qc")&&i<(q.k==="qc"?4:q.o.length)){curAnsStore()[q.id]=i;rerenderQ();e.preventDefault()}
  else if(i>=0&&(q.k==="multi"||q.k==="se")&&i<q.o.length){const b=document.querySelector(`[data-act="toggle"][data-i="${i}"]`);if(b)b.click()}
  else if(k==="N"){const b=document.querySelector(inExam?'[data-act="xNext"]':'[data-act="next"]');if(b)b.click()}
  else if(k==="B"){const b=document.querySelector(inExam?'[data-act="xBack"]':'[data-act="prev"]');if(b)b.click()}
  else if(k==="M"){const b=document.querySelector(inExam?'[data-act="xMark"]':'[data-act="mark"]');if(b)b.click()}
});
function clampScore(v){v=Math.round(+v||150);return Math.max(130,Math.min(170,v))}

renderNav();render();boot();
