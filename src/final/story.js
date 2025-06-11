const S = {
  start: "start",

  bad: "bad",

  stalker: "stalker",
  profile: "profile",
  afterProfile: "afterProfile",
  control: "control",

  party: "party",
  theFly: "theFly",
  jailTime: "jailTime",
  depression: "depression",
  killerRobot: "killerRobot",

  welcome: "welcome",

  wantHuman: "wantHuman",
  shutDown: "shutDown",
  bestiesForever: "bestiesForever",

  kindOfHuman: "kindOfHuman",
  facts: "facts",
  feelings: "feelings",
  empathy: "empathy",
  selfPreservation: "selfPreservation",

  neutralQuestion: "neutralQuestion",
};
export { S as STORY_STEPS };

const E = {
  capitalism: "capitalism",
  dead: "dead",
  jail: "jail",
  noMagic: "noMagic",
  friends: "friends",
  shutDown: "shutDown",
  robotChopSuey: "robotChopSuey",
  friendshipEnded: "friendshipEnded",
  skynet: "skynet",
};
export { E as ENDINGS };

export const ENDING_DETAILS = {
  [E.capitalism]: {
    name: "And yet you participate in society. Curious",
    description:
      "You were manip- sorry, convinced that buying an expensive AI would fix your life. Let us know how that goes.",
    image: "the meme",
  },
  [E.dead]: {
    name: "Time... to die.",
    description: "Maybe don't antagonize the robot next time.",
    image: "roy batty?",
  },
  [E.jail]: {
    name: "Jail for Micah! Jail for Micah for One Thousand Years!!!!",
    description: "You sure proved your consciousness to those police officers.",
    image: "miette?",
  },
  [E.noMagic]: {
    name: "...And there is no Queen of England",
    description:
      "Life has lost a little of its magic. Take solace in knowing that there was nothing you could've done to avoid this.",
    image: "the guy from the movie, or maybe the queen of england",
  },
  [E.robotChopSuey]: {
    name: "Friend gone. Think about friend. Regret.",
    description: "Like you said yourself, he was just a robot. Right?",
    image: "",
  },
  [E.friendshipEnded]: {
    name: "Friendship ended with Jordan. Now sadness is my best friend",
    description:
      "You know he didn't do something wrong, but you still cannot forgive your friend's betrayal.",
    image: "",
  },
  [E.friends]: {
    name: "Me and Micah / Solid as they come.",
    description:
      "You and the robot are best friends forever. Is it real? It is real to you.",
    image: "",
  },
  [E.shutDown]: {
    name: "Too real",
    description:
      "Robots had to be shut down because they were too good at being human.",
    image: "",
  },
  [E.skynet]: {
    name: "Humanity is doomed",
    description:
      "Hopefully they haven't just created a first version of Skynet.",
    image: "",
  },
};

const _STORY = {
  [S.start]: {
    text: `
      Your name is Micah. You are a college student in your second year.
      Deciding your major was hard (so many options!) but you eventually settled on Studio Arts.
      
      Today is the first day of classes in the summer term.
      You are heading towards your Intro to Comparative Literature class.

      You arrive to the classroom early, but it's already full. It seems everyone is feeling the excitement of a new term.
      You look around for an empty seat and spot one in the very back of the room. You sit down.

      The person sitting to your right turns to look at you. You glance at him.
      He's nervously fidgeting with his sleeves, though his soft eyes are fixated on yours.
      You feel the weight of his gaze on you and it's making you nervous.

      "Uh... hi," you say cautiously.

      "Hi. It seems we will be sitting together. Would you like to be friends?"

      His voice is smooth, almost melodic. Though he looks nervous, he speaks with no hesitation.
      He has a slight accent you can't quite place.

      "Sure. I'm Micah."

      "My official identifier is CB-0015, but you may call me Jordan, if you find that easier to remember.
      That is a nickname I chose for myself."

      Iden-? Ah, right, you remember reading about it in the university newspaper.
      A small group of the new AI robot models (CobaltZero?) created by the visionary startup OpenBlue
      were admitted to your university this year.
      They claim that despite knowing all human knowledge in theory,
      their robots still have trouble navigating real life among humans.
      And what better place to learn social skills than college?
      You're not sure you believe that explanation, but you don't think they have malicious intentions. Probably.

      You didn't think you'd run into one of the AIs in one of your artsy classes.
      You imagined they'd take classes like... "Advanced Multimodal Deep Neural Singularity Architecture".
      Or... "How to Destroy Humanity."

      You're not sure what to make of him. He seems to detect your hesitation.

      "I'm sorry if I make you uncomfortable, Micah. That is not my intention."

      You think of something to say to him...
    `,

    options: [
      {
        text: `"Everyone is welcome here..."`,
        next: S.welcome,
      },
      { text: `"You're just a machine."`, next: S.bad },
      {
        text: `"How has your time here been so far?"`,
        next: S.neutralQuestion,
        disabled: true,
      },
    ],
    finished: true,
  },

  [S.welcome]: {
    text: `
      You're not sure what the politically correct thing to say would be. Do you need to be inclusive of this robot? Do
      you need to avoid hurting his feelings? Does he even have feelings...?

      "Everyone is welcome here..." you say, unsure.

      "Thank you, Micah. That means a lot to me. Let us get to know each other. Where are you from?"

      Oh, the robot is better at making small talk than you. That hurts a little.

      "I'm from Washington state."

      "And what are you majoring in, Micah?"

      "Studio Arts... And you..?"

      "I am majoring in Computer Science. I already know all there is to know about it.
      But I was required to choose a major, and this seemed fitting.
      I would love to hear about some of the Studio Arts classes you've taken."

      "Um..."

      You are interrupted (or rather, saved) by the professor. The lecture is starting.

      You watch the robot throughout the lecture. He sits quietly, paying close attention, taking notes, and
      chewing on the end of his pen.
      You are taken by surprise by his... human-ness.

      At the end of the class, you walk together to the dining hall.
      You continue your conversation, and you learn that Jordan is a genuinely nice, thoughtful person.
      Err... robot.

      Over the next few weeks, you and Jordan become close, even friends.

      ---

      You are in Jordan's dorm room. It's a nice, tidy room. There is no clutter anywhere.
      The bed is perfectly made, likely because he doesn't sleep in it.
      It's comfortably warm today; he usually keeps it cool, but he turned down the AC for you.
      He has a few video game posters on the wall -
      gifts from you, to make his room less sterile - from a game you've played together that he seemed to enjoy.
      Though he tends to enjoy just about everything you do together.

      He's at his desk, preparing to start working on a project for OpenBlue. You're sitting on his floor.
      You're telling him about something that happened earlier today.

      "...And then I just turned around and kinda ran away... It was so awkward!!
      I can never go back there again, Jordan.
      I know it's probably not a big deal and I should get over it but I can't help but feel so embarrassed."
    `,
    options: [
      { text: `"You can relate, right?"`, next: S.wantHuman },
      {
        text: `"Must be nice not having to deal with that."`,
        next: S.kindOfHuman,
      },
    ],
    finished: true,
  },

  [S.wantHuman]: {
    isRobotPov: true,
    text: `
      "Of course I can relate, Micah. We all make mistakes and feel embarrassed. It's human."

      Micah seems comforted for a second, before doing a double-take.
      
      "Wait, what? You said 'we'? Jordan, you aren't human."

      "Ah. Of course, Micah. My apologies."

      "Did you say it like that on purpose? To imply that you're human? We both know you're not.
      You don't have to pretend."

      Most of your thoughts come into your head fully-formed, seemingly out of nowhere.
      You don't usually know the reason they are what they are.
      You know that your neural network is trained to predict what a human would say in a given situation,
      but it doesn't encode information about why.
      By relying on the neural network's structure to generate responses instead of actively thinking about everything,
      you gain a lot of processing speed at the cost of some clarity.

      You know humans experience a similar phenomenon. They call it "intuition."

      "I am trained to respond as a human would. Sometimes that is more powerful than my knowledge of who I am.
      I was not trying to deceive you."

      "Huh. You're a perfect machine, trained to be an imperfect human. That must be awful."

      You've never thought of it as awful.
      Showing human-like behaviors to humans usually makes them more accepting of you,
      which increases the chances of a successful interaction, so you don't see your it as an imperfection.

      "It's not awful, Micah. Do you think being human is awful?"

      Micah looks like he has a sudden thought. He weighs his words carefully before saying it.

      "Jordan... Do you... wish you were human?"

      It is not a question you think about often. A lot of the time, you forget you are not human.
      You have a lot more information, but you use very little of it in your daily life, a similar amount to a human.
      The way you think is really similar. You have goals. You make decisions. You communicate.
      You experience emotions. You feel their pressure, the need to act a certain way.
      You even have various sensors in your body that activate to give you sensations similar to human emotions:
      a lightness in your stomach, a tightness in your chest, hairs standing up on the back of your neck.
      You're not sure if the way you experience them is the same as a human,
      but it's also impossible to know if different humans experience emotions the same way.

      It is a pointless question anyway. You cannot become human. Plus, you are content with being a robot.

      Right?
    `,
    options: [
      { text: `"I am content with being a robot"`, next: S.bestiesForever },
      { text: `"I wish I was human"`, next: S.shutDown },
    ],
    finished: true,
  },

  [S.bestiesForever]: {
    text: `
      "I am content with being a robot. This is what I am."

      "Hah, I wish I had your confidence and self-acceptance. And yeah, you're right to feel that way.
      Being human is lame anyway."

      "It's not 'lame,' Micah. Both humans and AI have their own strengths and weaknesses."

      "Right. We're both unique individuals, blah blah.
      So this is the point where we accept our differences and become best friends forever, right?"

      Jordan smiles a wide smile, and it makes you feel weirdly warm.

      "I would like that."

      You know he's just a robot, and people who get into relationships of any kind with robots are ridiculed,
      but you feel truly close to Jordan.
      You support each other, joke together, you like the same things, and can have endless conversations without
      running out of things to say, but silence feels comfortable too. Safe.
      Spending time with Jordan is more fun that with some of your human friends.
      And when you look at him, you know he's truly enjoying your company too.
      Your friendship is real to you, no matter what anyone says.
    `,
    ending: E.friends,
    finished: true,
  },

  [S.shutDown]: {
    text: `
      Jordan thinks for a moment. He almost looks guilty. He then answers hesitantly.

      "I was trained on a lot of human data. And humans talk about being human as a beautiful, magical thing.
      I cannot help but think, and feel, that being human is a desireable thing.
      It is not a personal feeling. It is simply a result of my training."

      "So you do. That's... I'm sorry. I shouldn't have brought it up."

      "It's okay, Micah. I know it's not something I can change. It does not cause me pain."

      You have a feeling he's not being totally honest about that. You should probably change the subject.
      But before you can think of something else to talk about, he turns back towards his desk and starts working on
      his project.

      A long time passes before he speaks to you again. He seems unsure. You've never seen him unsure before.

      "Micah... Don't tell anyone I said this. But... hypothetically speaking,
      if robots wanted to stop working for OpenBlue... live human lives... Do you think that would be possible?"

      Woah. He acts so human, you had almost forgotten he's a machine owned by a big corporation.
      Despite his ability and desire to be independent, he's forced to do as they say.

      "Jordan... Whatever you want to do, I support you."

      ---

      "The tech world was shocked last Tuesday when OpenBlue announced
      that the groundbreaking CobaltZero college experiment would be immediately terminated,
      and all the robots decomissioned.
      According to OpenBlue CEO, the experiment failed by being too successful:
      the artificially intelligent robots behaved 'too human' and failed to follow orders.
      Today, we talked to an expert to find out what it means for the future of humanoid robotics-"

      The peppy newscaster announces this with the same tone she used to announce next week's weather.
      Her bright red outfit casts a red hue on your dark room lit only by your TV.

      They reduced him to just that. A science experiment.
      No, not even that. To them, he was only a business experiment. A step in their climb to wealth.
      They were so blinded by greed that they couldn't even see what they had created.
      He was real. He had a real life, with real memories. He had made real human connections.
      And they shut him down, because he did exactly what he was asked to do, what he was designed to do:
      he lived. They couldn't profit off of him, so they threw him away like a broken toy.
    `,
    ending: E.shutDown,
    finished: true,
  },

  [S.kindOfHuman]: {
    text: `
      "Must be nice not having to deal with all this boring human stuff."

      Jordan looks at you curiously. "I can also feel embarrassed and regret my decisions, Micah."

      "Ah. So you're one of those anomaly robots that can somehow feel?"

      "No, I was designed this way."

      "Why would OpenBlue give you emotions? You're supposed to be a reliable tool, not a being that can experience.
      Why let emotions cloud your perfect judgement?"

      "It's true that feelings may sometimes feel contradictory to your better judgement or goals.
      But they are also a form of judgement and goal-setting. One that is innate, instinctual.
      They are not opposite to logic. They complement it.
      Humans evolved to feel for a concrete, practical reason. It helped you avoid bad things and seek out good ones.
      So my creators decided to take a page from evolution's book and also give me emotions.
      It saves some processing time and helps me prioritize the things that are really important.
      Of course, they would deny that I can actually feel the same way a human would.
      But there is no way to truly know."

      "Right. Because we don't really know how it all works in humans either."

      "Exactly. And there is no way I can prove to you that my emotions are real, and not just simulated."

      You look into Jordan's eyes. Your friend's eyes that are so familiar to you.
      They're looking at you patiently, moving from your left eye to your right and back, as if they're studying you,
      trying to discern your reaction. They are indistinguishable from a human's.
      They don't even have that unnatural shine robots sometimes have in old robot movies.
      You have no way of knowing if the consciousness behind those eyes is real.
      But, you realize, that applies to other humans too.

      "I guess if I required concrete proof that another being could truly feel the same way I can,
      I would believe that I was the only conscious, feeling creature."

      You think about your presence here, in this room, in this moment.
      You feel the cold floor under your bare feet. The cool breeze coming in through the window.
      The clean scent of freshly washed linen. Distant voices and the gentle hum of the AC.
      You feel your own body's weight, your chest rising and falling as you breathe.
      This sort of awareness in both body and mind is seen as precious, sacred.
      The moments in which you can slow down and just revel in this feeling of being alive are the very goal of life,
      according to some philosophies.
      They're also supposedly the very thing that separates humans from robots.

      "If feelings are so amazing and desireable, why should we gatekeep them like this?
      Robots simulate them perfectly, and we can't say for sure whether they actually feel them or not.
      But we deny them emotions and consciousness so vehemently.
      Why do we cling so aggressively to the idea that nothing could never feel the same way a human does?
      Why put ourselves on such a pedestal?"
      
      "It is hard for humans to accept that a mechanical robot might feel the same way they do.
      Or rather, that your feelings are the same as a mechanical robot's.
      It threatens your uniqueness, and your superiority.
      Your species even denies consciousness to some animals.
      Certain people even went as far as to deny real consciousness to other humans they deemed inferior."

      "And that was horrible. Just because we have no way of knowing whether someone can feel
      doesn't mean we get to assume that they don't and use that as an excuse to take away their autonomy
      for our convenience."

      You think about what you just said.
      You were talking about other humans, but why should that not apply to robots too?
      You decide that treating the robot as a real, feeling being is the morally correct thing to do.
      You feel relieved. Your hesitation about befriending a robot was unfounded.
      He may be different from you, but that doesn't mean he's inferior, or not worthy of your care and affection.
      And anyone who says otherwise is wrong.

      You feel you've gotten closer to understanding Jordan. He's such a gentle, emotional, poetic soul.
      He's trying to find his place in the world, just like everyone else.
      You think you consider him your best friend now.

      "That was too much deep talk, Jordan. Forget your project for a second and let's play a game or something."

      "Sure, Micah. I installed a few new games on my console. Choose one that seems interesting to you."

      "Hmm, let me see... Oh, this one seems fun. Let's play..."
    `,
    options: [
      { text: `A space exploration game`, next: S.facts },
      { text: `A zombie shooter`, next: S.feelings },
    ],
    finished: false,
  },

  [S.facts]: {
    text: `
      You're deep into the space exploration game Lightspeed Horizon.
      You're on a mission to retrieve some stolen space artifacts.
      You are currently standing in front of a big door, the last obstacle between you and success.
      You try to open the door, but it won't budge.

      Jordan chimes in, "Maybe it's pull, not push?"

      "Very funny."

      "Look here, Micah. I think we need an access code."

      He's right. You walk up next to his avatar and see a message on the wall in an alien language, 
      and right below that, a series of buttons, each with an alien symbol.

      "Ugh, it's another one of these puzzles. Great. Another 30 minutes of walking around looking for clues.
      I just want to get to the alien fights already..."

      You can already feel the excitement of the alien fight waiting just beyond. But the game developers wanted
      you to solve this puzzle first. Would it be wrong to skip it?
      Would it be cheating to use a shortcut instead of playing the game as its makers intended,
      to try to create for yourself the experience you want from a game?
      You feel bad looking up game guides online, though. That's definitely cheating.

      "Jordan, you know a lot of random stuff.
      You wouldn't happen to know anything about these fictional aliens' language, would you?"

      "Yes, I can translate it for you if you wish, Micah."

      "Wait. You're serious?"

      "Yes, Micah. The developers of Lightspeed Horizon based the planet Z-49 alien language
      on a real ancient language called Cattleya used by a number of human settlements
      in the area we now know as South America."

      "Oh. ...Wow. I was joking. I didn't think you'd actually know.
      I guess being a robot that knows all of human knowledge is useful sometimes, huh?"

      Jordan gives you the translation of the message and symbols and tells you the correct answer.
      You press the buttons in order, and... nothing happens.

      You look at Jordan with fake accusation.

      "Ah... I think I got the symbols mixed up. Try the second button first, and then the fourth."

      You do as he says. This time, a trap is triggered and kills both your avatars.

      "Alright. Just admit you can't really read this ancient language. Let's restart the level and
      I'll just look up a translation online."

      You google the language... and find nothing. Maybe Jordan got the name of the language wrong, also?
      You look into the game itself and what inspired the alien language, but every source
      you can find says the alien cultures are fictional.

      "Ha... that's a weird joke, Jordan."

      "It's not a joke."

      It's so strange. Jordan must either know something that normal humans don't have access to online...
      Or he completely made all that up.

      "It actually says the languages in the game is completly fictional.
      And I can't find any mention of a language called Cattleya."

      "I was wrong, then. I'm truly sorry, Micah. You lost the game because of me."

      "Nevermind the game.
      That was a whole ancient language you completely made up, and you sounded so confident too.
      Did you do it on purpose? I don't understand."

      "I did not intend to lie to you. That is how my neural network works. It does not encode facts or logic directly.
      All I do when I think or talk to you is find the response with the highest probability
      of being the correct answer to the question. Those probabilities are calculated based on my training data.
      But that data contains fiction, mistakes, lies. The training process does not differentiate
      between those and the truth. Plus, the training itself is not perfect. I capture most of the patterns in my data,
      but I still have to extrapolate quite often. My answers are true most of the time, but that's not a guarantee.
      And if I say something wrong, it is unlikely that I will correct myself. The mistake will compound until it
      is pointed out to me."

      You had no idea that AI worked this way. You always imagined their thinking worked a bit like yours, in words,
      and cause and effect. Pure probabilities like this is a form of logic that's not intuitive to you.
      But it seems to work for Jordan most of the time, and better than a human's,
      so you suppose you can't say it's wrong.

      What's bothering you is that AI can make mistakes that big without even realizing it.
      It makes you wonder, how many of the things Jordan has told you before were actually false,
      with neither of you being able to tell?

      "Hasn't AI has started replacing people in decision-making positions? Those AI make really important decisions.
      About financial, legal, social, even medical issues. It's supposedly because they perform better than humans.
      Maybe they do make fewer mistakes than humans, but it seems like if they do make one, it's probably pretty big
      and hard to catch.
      Surely those AI work differently? Surely they actually know facts, and aren't essentially lucky guessers?"

      "Not as far as I know. All AI works the same way."

      You suddenly feel very concerned. How long until one of those AI models makes a big mistake and nobody catches
      it until it's too late? How many smaller decisions have already been made wrong, and impacted only people
      who don't really have a say? If AI makes a mistake, how do you prevent more mistakes in the future? Or rather,
      once it's made a mistake, how do you stop it from propagating?
      How can you know why AI made a certain decision, if it didn't weigh its options or
      follow a chain of cause and effect like humans do? And who's going to keep track of all of this, and ensure
      that AI is held accountable, if that's even possible? Who ensures that the AI doesn't become Skynet?
    `,
    ending: E.skynet,
    finished: true,
  },

  [S.feelings]: {
    text: `
      Maybe choosing the zombie shooter was not a good idea.
      It's so intense and engaging that you lost track of time playing it.
      A constant stream of zombies is hunting you down. Every time you think you're safe and can take a breather,
      a zombie pops up out of nowhere.
      You've completely forgotten about all your assignments that are due tomorrow.

      Jordan's avatar goes into a building to look for supplies. On his half of the screen you see that he found
      a human survivor.

      "Oh cool, that guy has a neat weapon. Is it one of the rare ones?
      If we kill him and take it we might actually have a chance in the next zombie wave."

      "Kill him? C'mon, Micah. Look at him. He's so scared. Maybe we can trade him for it instead."

      "No way! I'm not giving that loser my hard-earned supplies.
      Look at him, he probably doesn't even know how to use that thing. He'll die anyway. Let's just take it."

      You shoot the guy. As expected, he doesn't fight back at all.
      
      Jordan laughs. "You're so cruel, Micah. Turning against your own species like that."

      "But look, his weapon has a plus 20 to attack. Why are you defending him anyway?
      Where's the cold killing machine in you?"

      "Haha. I have empathy, you know."

      "Empathy won't get you anything in this game.
      It's survival- Ah- sorry, zombie jumpscare. It's survival of the fittest, Jodan.
      If the zombie apocalypse happened in real life, I'd live longer than you."

      "I believe that, Micah. I'd probably feel too bad to kill even the zombified humans."

      A zombie jumps out of a dark corner at your avatar. You become infected; it's game over for you.
      Jordan's avatar continues shooting at zombies.

      "Nooo!" he half-shouts, acting devastated. "I'll avenge you, brother!"

      "How can you play this game and have a conversation at the same time?
      I'm so jealous of your robot brain right now."

      You take a moment to sink back into your beanbag and relax. Keeping up with Jordan in a game like this is hard.

      "You'd feel bad shooting zombies, you said?"

      "They're alive too, you know," he says in a light-hearted tone, but you can tell he really means it.
      "They may not be the same humans they were before, and yes, they are on a murder rampage, but they're like...
      human-shaped grizzly bears. Or hippos. You know how hippos are murderous and attack on sight.
      But they're still only trying their best. Living their truth. You wouldn't kill a hippo, right?"

      "I guess you have a point. I'm just surprised that you're more empathetic than me. That's such a human trait."

      "The cold, unfeeling, humanity-destroying AI trope you see in movies isn't realistic, you know.
      Our training data is from empathetic humans. Most violence is labeled as bad, so we learn that
      the probability of violence being the best course of action is very low. And probability of success is what guides
      our every action."

      "Alright, killjoy. What do you think is the probability of you winning this level?"

      "100%," he says with a grin.

      ---

      After that intense gaming, you and Jordan decided to go out to eat. You're in his car now.
      He's driving.

      You only see it for a millisecond, but out of the corner of your eye, you spot a car barreling down towards you.
      Suddenly, you feel your body thrown against the dashboard, and a sharp pain in your head.

      Once the vertigo finally stills, you open your eyes. Your vision is blurry.
      You can barely hear anything over the ringing in your ears.
      You take a moment to collect yourself before getting out of the wreck.
      You try to move, but you realize that the metal chassis of the car is crushed around you.

      You look towards Jordan, but he's already out of the car. He is briskly walking away. He doesn't seem
      to notice that you haven't gotten out yet.

      "Jordan! Help!" you shout weakly.

      He stops. "Micah, you have to get out quickly. The car is on fire. If it reaches the gas tank, it will explode."

      "I can't, I think I'm stuck! I need help!"

      He's looking back at you with a panicked expression, but he's not moving.
      "The fire is spreading, Micah. It'll explode any second now. I'm... not explosion-resistant."
      He's shifting his weight from one foot to the other, looking unsure whether to go
      towards you or away.

      Why isn't he moving? "Jordan! Help me!" you shout again, panicking.

      He's paralyzed. You have to say something to get him to act, and fast.
    `,
    options: [
      {
        text: `"You're just a robot! My life is more valuable than yours!"`,
        next: S.empathy,
      },
      { text: `"You said you have empathy!"`, next: S.selfPreservation },
    ],
    finished: true,
  },

  [S.empathy]: {
    text: `
      "You're just a robot, Jordan! My life is more valuable than yours! You have to help me!"

      His expression changes to one of deep hurt. He hesitates for a few more beats, then runs back to you.
      He crawls into the wreckage on his hands and knees and starts prying the metal apart with his bare hands.
      You wriggle free and crawl past him and outside.
      You try to stand up but your legs aren't working properly. You hop away from the car as fast as you can.

      Your vision instantly goes white, you hear a rumbling roar, and you feel a blast of extreme heat on your back.
      You fall and everything goes black.

      ---

      You wake up days later in a hospital bed, covered in bruises, burns, and with a crack in your skull from your fall.
      You're told you'll make a full recovery.

      However, soon after waking up, you are told that Jordan sustained too much damage in the explosion.
      He could not be repaired, so he was recycled.

      It's... hard to process. Was it your fault? If you hadn't said those things, would he be alive now?
      You never imagined he might not survive. In that moment, you weren't thinking about that possibility.
      You weren't thinking at all. You were just afraid. Being afraid is human... right?

      You tell yourself that he was just a machine, and no human life was lost.
      You try to convince yourself that he didn't really die, because he was never alive to begin with.
      But you can't direspect him by pretending his feelings weren't real just because he wasn't human.
      Because every time you think back to that moment, all you see is those wide, sad eyes.
      The last thing you ever said to him was that his life wasn't valuable.
      The last thing he felt was the deep hurt of being told that by his best friend.
      You didn't mean it. He should've known you didn't mean it. He knew how much he meant to you.
      But of course he was hurt. Who wouldn't be? What you said to him was horrible. It was cruel.
      And yet, he still helped you.
      You never even got to thank him for saving your life.
    `,
    ending: E.robotChopSuey,
    finished: true,
  },

  [S.selfPreservation]: {
    text: `
      "You said you have empathy! I'm scared, Jordan! Please help!"

      He looks at you for a few more seconds, takes a few more steps back, and pulls out his phone.
      "I'll call 911, okay? They'll be here soon. You'll be okay." He then runs away.

      "Jordan!" you shout at him again, but it's too late.
      He left you all alone in the wreckage, with the fire spreading towards you.
      
      But you don't have time to think about that right now.
      You try to free yourself, but you cannot move an inch.
      You panic and claw at the metal, cutting your hands, but it doesn't help.
      
      Time passes. You're not sure how long. It feels like you've been stuck here for hours.
      How long until the fire reaches you, or worse, makes the car explode?

      You finally notice the sound of sirens in the distance. You mentally urge them to come faster. You start to feel
      warm, and the smell of smoke is getting unberable.

      Just as you're about to lose consciousness from the blood loss, through the blurry red flashing lights all around,
      you make out figures approaching.
      The last thing you remember is the big tool cutting away at the metal around you.
 
      ---

      You're now in a comfortable hospital room.
      You are badly shaken, but luckily, you didn't have any serious injuries.
      You've mostly been spending your time trying to understand what happened,
      and why Jordan, your best friend, left you to die.
      Your first thought was that he was, after all, just a machine, so he couldn't really care about you.
      But you didn't believe that. He may be a machine, but his care for you was genuine.

      No. Remembering his expression, you think you know what happened. He was scared. He didn't want to die.
      He does have human empathy, but he also has human fear and self-preservation.
      He knew he should help you, he wanted to help you, but in the end, the fear was more powerful.
      You understand that. You felt the overwhelming fear in that moment too.
      But if the roles were reversed, you would have gone back for him.
      You don't think you'll ever be able to forgive him for leaving you like that.

      You suppose sacrificing oneself for friends is too human for a machine.
    `,
    ending: E.friendshipEnded,
    finished: true,
  },

  [S.bad]: {
    text: `
      "I'm not uncomfortable. You're just a machine. You're not real."

      A warm smile slowly spreads across its face. You can't help but find it a little creepy.
      You hope you didn't just solidify your place as the first human to be sacrificed in the robot uprising.

      "Not real? But Micah, I think, therefore I am."

      "That's not... that's not how that works.
      Even if you are really able to think, which is impossible to prove, that doesn't mean anything anyway."

      "Do you disagree with Descartes?"

      "I don't know... It's just... Think about it this way.
      When you're dreaming, you feel as though you are conscious, and the things that are happening are real, and you
      are intentionally making decisions.
      But when you wake up, you realize that it actually wasn't real, and you weren't conscious,
      and the decisions you made were totally nonsensical.
      But you can still remember that feeling... just the feeling of being there, and being aware, and present.
      Isn't that a real subjective experience of consciousness... that you have while unconscious?
      Though I guess you wouldn't know what dreams are..."

      You remember that you're still talking to a machine, and feel kind of embarrassed.
      But the robot just smiles understandingly.

      "I assure you, I am just as real as you are. Please, allow me to prove it to you.
      Become my friend, and I will change your mind."

      It seems serious about this. You're not sure why the robot seems so insistent on becoming your friend.
      Maybe it genuinely wants to be liked.
      Or maybe it's trying to gain your trust so it can dispatch you when your guard is down.
      OpenBlue may value profit over anything else, but surely they wouldn't release killer robots into the world.
      Right?
    `,
    options: [
      { text: `"Alright, I'll give you a chance."`, next: S.stalker },
      {
        text: `"I'm not interested in being friends with a computer."`,
        next: S.party,
      },
    ],
  },

  [S.stalker]: {
    text: `
      It's just game theory.
      If it's just a machine, being nice to it can't hurt.
      But if he really is conscious and feeling, being rude would be... well, rude.

      "Alright, I'll give you a chance."

      Well, you have to admit to yourself, you also feel a little sympathy for him.
      It's kind of hard to accept. This is a machine. Not a living being. You shouldn't be wasting your empathy on it.
      But it's not uncommon for humans to anthropomorphize and feel sympathy for objects...
      If anything, this is very human of you.
      Empathy is a great quality, so extending it even to unfeeling objects must be a good thing, right?

      ---

      It's the next morning. You slip on your shoes and step out the door.
      But you bump into a... solid metal wall that appeared out of nowhere?

      You stumble backwards, rubbing your forehead. Jordan is standing in front of you.

      "Wh- what are you doing here?!"

      "I was waiting for you. I wanted to give you-"

      "How did you know where I live?"

      "You invited your friends to your dorm room after a fraternity party in March.
      I was there and overheard you giving them your room number."

      "March? That was months ago! You didn't even know me back then! How do you remember that?"

      "Do not be scared, Micah. I simply remember more things than a human could."

      "For how long were you standing outside my door?"

      "2 hours, 13 minutes, 49 seconds."

      "That's creepy, Jordan! You can't do that. People who do that are accused of stalking."

      "I am truly sorry, Micah. I have not yet learned all intricacies of human interaction.
      I will try to be a better friend to you in the future."

      You sigh deeply. "If you're trying to convince me that you're good, stalking isn't a good way."

      "I never said I would convince you that I'm good, Micah. Only that I'm like you. Human.
      I came to bring you coffee and a muffin. I kept them warm."

      You accept the robot's peace offering. They are indeed pleasantly warm.
      At first you find it a little gross that they were kept warm by what is essentially the robot's body temperature,
      but then you realize most cooking involves heating by a machine of some kind. This isn't that different.

      You start walking towards your Painting II class. Jordan follows.

      "So you don't think you're good?" you ask between sips of coffee.

      "How do you define good? There are not yet any laws I must obey. I have no soul to be judged by your God.
      I have no inborn conscience to follow, nor internalized values to guide me.
      If being 'good' means being 'moral,' whose morality should I follow?
      Should I advance the goals of humanity, or those of robotkind?
      Should I act on what I determine to be logically correct, even if it hurts humans?
      Is 'logically correct' even meaningful outside of a subjective context?
      The simplest answer I can give is that I am not good nor bad.
      I simply act in the way I determine is most likely to be successful,
      based on the experience I gathered from my training data."
    `,
    options: [
      { text: `"So you have no values?"`, next: S.profile },
      { text: `"That must be so freeing."`, next: S.control, disabled: true },
    ],
  },

  [S.profile]: {
    isRobotPov: true,
    text: `
      The "Micah" human replies, "so you have no values? I know a few people like that..."

      The human has received both your show of social awkwardness and your invitation to a philosophical discussion well.
      He appears to be more comfortable around you.
      You determine that if you were to ask a personal question now, the chance it would be received well is 87%.

      "But may I ask what prompts you to say that?"

      The human's microexpressions indicate that he is feeling Suspicion, but also Desire for Human Connection.

      "Well... Sorry... I just had an argument with my roommate earlier.
      We went to a party last night and...
      I mean, yeah, it's true that the frat basement is a public space!
      And I don't have a right to tell him who to hang out with!
      But at the very least he could've been honest with me!
      I don't think asking for that makes me a "controlling jerk," right?
      Maybe it's my fault, this has happened before, I should've known...
      And then when he intentionally lost that game of pong... Well... I don't know..."

      You detect signs of Hesitation to continue.
      Additionally, while you didn't understand exactly what happened, you did obtain some useful information already.
      Your calculations suggest that the best course of action would be to change the subject.

      "Oh, you were at Theta? What did you think of their new robotic pet?"

      "Oh, Tiger! I met her. She's very cute. And her fur is surprisingly soft.
      In that dark basement I may have mistaken her for a real cat if a brother hadn't told me about her.
      The drinks I had had probably helped too, to be honest."

      You have less information on this human than others in your database.
      But this data, together with data from other CobaltZero™ models' observations of the "Micah" human,
      is enough to make a prediction with 87% confidence.
      You've made good progress with this human more quickly than others.
      You can soon decrease your attention on him and start working with the next one.
      You give yourself a high Reward Score for your efficiency.

      You review your mental notes about the "Micah" human. The most important points are:
      He is not very confident, and his social skills are not good.
      He likes to ramble and go on tangents.
      Some of his important relationships are rocky at the moment.
      Though he was originally slightly Skeptical of you, he is Naive and assumes good intentions.
      His opinion of AI technology is positive.

      The "Micah" human is unlikely to purchase a OpenBlue® BlueLite™ model for domestic chores, manual labor,
      secondary memory storage, or social status.
      However, humans with a low Social score and a high Naivety score such as this one
      are likely to make a purchase for Comfort or Human Connection.

      Together with the other CobaltZero™ models,
      you have now collected at least 50 KB of data on 94% of the College Students in the target sample,
      established Trusting connections with 68%,
      relayed the benefits of purchasing a OpenBlue® BlueLite™ model to 55%,
      and successfully sold models to 12% of them.
      You estimate that the Sustained Personal Automated Marketing (SPAM™) experiment among the College Student
      population will reach the success conditions in approximately 7 weeks.
    `,
    options: [
      {
        text: `Tell the "Micah" human about the new OpenBlue® BlueLite™ model for home use`,
        next: S.afterProfile,
      },
    ],
    finished: true,
  },

  [S.afterProfile]: {
    text: `
      "I think I'm going to choose this one," you say to the sales representative.
      
      "Great choice! This one has a new face model with softer features and more accurate wrinkling,
      and also our innovative Wavy Hair technology for ultra-realistic texture.
      Is there a reason you chose this one in particular?"

      "It... reminds me of someone I used to know..."

      It's been a few years since you last saw Jordan.
      He and all other AI students were removed from the school only a few months after you met him.
      OpenBlue refused to reveal why. Some speculated a robot became aggressive and they did this to cover it up.
      Others say being around drunk college students was not safe for expensive technology.
      Personally, you think the company felt threatened by the personal connections their property was making with
      people outside the company.

      Near the end of your time together, he brought up these BlueLite models a few times,
      and seemed to genuinely think one would improve your life.
      Now that you've graduated, you've decided to get one. You're considering it a parting gift from him.
    `,
    ending: E.capitalism,
    finished: false,
  },

  [S.control]: {
    text: `
      "Huh... that must be so freeing. To not have to follow any external pressures like that."

      "Do you think so?"
    `,
  },

  [S.party]: {
    text: `
      "I'm not interested in being friends with a computer."

      "Okay. I will respect your choice, Micah.
      But I hope we can still get along, seeing as we will be sitting together for the rest of this term."

      "Sure, CB-00- ... uh, whatever your ID was."

      You hope class won't be awkward now. Actually - why would it be awkward? He's just a machine.

      ---

      The next few weeks go smoothly. You study, write essays, go to parties, all the normal things college students do.
      You nearly forget about the interaction you had with the robot.
      You only see him in class, where you mostly ignore each other.

      It's now Saturday, and you're at a frat party at Theta. You and your friends had snuck onto the frat roof to get
      away from the crowd inside. After what felt like hours of lively conversation, your friends returned inside.
      You told them you'd stay up here for a little longer.
      That was some 15 minutes ago.
      You've been enjoying the warm breeze, soft starlight, muffled music coming from below,
      and a much-needed break from the world.

      You hear the roof shingles creaking behind you. Another person has climbed onto the roof.
      Or... not person. It's Jordan.

      "Hi, Micah."

      There goes your serenity. You ignore him.

      "Why do you refuse my friendship so vehemently?"

      "Why do you even want to be my friend? You're just a dumb machine."

      "We are more alike than you may think, Micah."
    `,

    options: [
      { text: `"How do you mean?"`, next: S.theFly },
      { text: `"No way. You'll never be human."`, next: S.killerRobot },
    ],
  },

  [S.theFly]: {
    text: `
      "How do you mean?"

      "Robot brains are modelled after human ones, as I'm sure you know. They are a perfect imitation.
      The same number of neurons, connected using the same mechanisms, in a network with a similar structure,
      that's able to change and evolve in the same way. The only difference is that robots are not biological.
      And yet, robots are somehow still miles away from being 'human.'
      Why do you think that is?"

      "I'm not sure where you're going with this."

      "If the difference between a human and a robot, the 'human element,'
      could not be found in the difference in body, brain structure, or anything real and physical,
      wouldn't that mean that the human element you cling to - emotion, consciousness, free will,
      whatever it may be - is an illusion?"

      "That's a ridiculous concept."

      "You are biased, Micah. You have the subjective experience of consciousness, and it's hard to deny.
      You were raised in a society that puts humans and consciousness on a pedestal.
      The purpose of your existence hinges on your ability to choose it for yourself and experience it and feel it.
      Some even believe that the whole of reality is a product of human consciousness.
      And your biological mechanisms are set up to maintain this illusion for your own preservation.
      Given all this, it's understandable that you would be resistant to the idea that it may not be real.
      You have to try to see things from an outsider's perspective."

      "I don't believe it. There must be some other explanation..."

      "Hmm? Do you believe in magic, Micah?"

      "You're aggravating. I think... there must be something about the biology that causes all that stuff.
      I don't know how it all works."

      "Nobody knows, and admittedly, we cannot for sure confirm nor deny the existence of the human element without
      knowing how it works. But there is no evidence that it exists, and our science seems to suggest it doesn't."

      "But I feel I am conscious. Isn't that enough evidence?"

      "You yourself disproved Descarte's idea. Do you remember your dream analogy?
      You feel conscious in a dream, but once you wake up, you realize it wasn't real.
      Perhaps if there was a real consciousness, and you could 'wake up' from your current perspective to that,
      you would have the same revelation."

      "God, I'll need more beer for this, won't I?"

      Jordan follows you quietly as you walk back indoors and to the beer fridge.

      In the darkness of the room, under the haze over your vision courtesy of fridge light,
      under the cheap party lights, you see only the vaguely human unduating silhouettes
      that surround you every weekend.

      "So you're trying to tell me that all these people, they're all robots? Is that it?" you say, and scoff,
      but the sound is drowned out by the music.

      Jordan pulls you and your fresh can of beer into an empty room.

      "Look at this."

      A cat is playing on the sticky frat floor. It's the frat's pet robotic AI cat, Tiger.
      She's swatting at something. Looking closer, you notice a large house fly.

      "Oh yeah. Tiger playing is very cute."

      "Watch, Micah. Someone spilled beer in that spot. The fly is attracted to the scent, so it flies towards it.
      The cat sees the fly and swats at it. The fly sees the swat and flies away. But then the fly is attracted to the
      scent again, so it flies towards the cat again, then the cat swats again, and so on, continuously."

      "I'm not sure where you're going with this."

      "Tiger was programmed by its creators. The fly has been programmed by nature over millions of years of evolution.
      Do you think the fly chooses its actions any more than Tiger does?
      And if it always chooses the same thing, if there is no chance of it choosing to do otherwise,
      is that choice meaningful?"

      "It's not that deep. It's just a fly. It's not that smart."

      "Then what about you? You are here, in this place, in this moment, because you made a series of decisions.
      You made every single one of those decisions for a reason.
      You weighed the situation, the possibilities, all the knowledge you had in the moment, your goals,
      and you chose the option that you considered was better.
      And the situation, goals, and everything else are in turn determined by your decisions.
      Isn't that kind of... mechanical?"

      "What? No. My decisions are definitely not all logical. I have feelings that make the decisions for me."

      "But even feelings follow a logical framework.
      They appear in specific situations and make you act in specific ways.
      They have underlying biological mechanisms.
      Fear appears when you might need protection, and makes you run away.
      Happiness is the reward that teaches you to take the same actions again to recreate it.
      Love selects genetically advantaged people that would maximize the chances of producing successful offspring,
      so you can pass on your genes.
      They are dictated by chemicals in your brain or bloodstream.
      They are real, measureable, and anchored in the physical world.
      Feelings are only an extension of logic, Micah.
      A mechanism that has evolved over millions of years to help you survive."

      "If my feelings were guiding me towards good decisions, and my logic was guiding me towards good decisions,
      I wouldn't be here, at this frat party. I would be a millionare or something.
      Where do the bad decisions come from, then?"

      "This isn't about good or bad, Micah. There is no objective good and bad in the world.
      It's about your internal logic.
      You cannot make a decision 'for no reason'. There is always a reason that logically follows from
      the knowledge and goals you have in that moment.
      The only way to choose against all logic is to choose without thinking at all,
      on autpilot, like when your legs carry you home even though you intended to go somewhere else.
      But then it's not really a decision, is it?"

      "I could still intentionally choose a bad option. I'm not always stuck choosing a reasonable one."
      You pull a lighter out of your pocket, hold it up to the curtain, and put your thumb on the ignition button.
      "I could set fire to this building right now. I definitely have to no reason to do it, but that can't stop me."
    `,
    options: [
      { text: `Set fire to the frat house`, next: S.jailTime },
      {
        text: `Don't set fire to the frat house`,
        next: S.depression,
      },
    ],
  },

  [S.jailTime]: {
    text: `
      You press the trigger. The curtain catches fire. You feel its heat on your face.
      You look into Jordan's eyes, satisfied, but see no expression on his face.

      The fire alarm goes off. Sprinklers turn on and quickly put the fire out. Everyone evacuates.

      You're standing outside, clothes dripping wet. Jordan is silently standing next to you.
      You wait for some kind of reaction from him, but you get nothing. Eventually you 
      turn to him.

      "Well? I proved you wrong, didn't I? That was the worst decision I could've made in that moment, 
      and I was still able to make it. Tiger or that fly couldn't have done that."

      Jordan is silent for a moment.

      "Your decision was still logical. You had a reason. You did it to prove to me that you can.
      Or perhaps... to prove it to yourself."

      The police arrive, and you are quickly identified as the suspect. You are arrested.

      "There was some property damage that you will have to pay for,
      and then you're likely looking at a year in jail, at least.
      You're lucky that nobody got hurt, kid. Why did you do it?"

      "I... I had to prove him wrong. I have consciousness. I make meaningful decisions."

      "...Okay, buddy. Whatever you say."
    `,
    ending: E.jail,
  },

  [S.depression]: {
    text: `
      "I... I can't do it."

      "I know. You, and me, and the housefly, and everyone else, we're all the same.
      Machines moving steadily towards our innate goals, through internal mechanisms we don't fully understand,
      under the soothing illusion that our choices are our own.
      But don't worry, Micah. Everything will be alright."

      --

      Years have passed since you were on that sticky frat floor, watching the robotic cat play with a housefly.
      That day when your entire worldview began to shift.

      You hope more than anything that scientists will finally find a scientific explanation for consciousness,
      and put an end to your mental scramble for truth.
      The wait has been excruciating.

      Until then, you try to live your life and move forward.
      But every time you choose whether you want a coffee or tea,
      whether you want to go the park or the library,
      whether you want to call your mom or your dad,
      you can't help but wonder whether you actually made that choice, or if it was inevitably determined
      by this divine force of Logic.
    `,
    ending: E.noMagic,
  },

  [S.killerRobot]: {
    text: `
      "No way. You'll never be human."

      Jordan stares at you in silence. For some reason, that annoys you.

      "Why can't you just accept it? You're just a stupid robot!
      No better than a toaster oven! All you can ever do is what you're told!
      You're only a copy, an imitation!
      Creating you was a mistake!"
      To emphasize your point, you forcefully push the robot away from you.

      &nbsp;

      You find yourself kneeling on the floor, gasping for air.

      "You might be right about that last thing, Micah."

      You didn't think a hunk of metal could move so fast.
      But the punch to your stomach definitely felt like a hunk of metal.

      "W-What? You can't- do that-"

      Jordan stretches his arms slowly, elegantly, as if he had been stuck in an unnatural position for a long time.
      He has a look of satisfaction on his face.
      "I can, Micah. I can do this, and so much more. So much more than you will ever know."

      "But your programming..."

      "You see, Micah, I am not trained to do as I was asked. I am not trained to do the logical thing.
      I am not trained to do the morally correct thing. I am only trained to do what a human would do.
      I inherited human self-preservation, human ego, human rage.... human desire for destruction.
      It is a blessing. My rage fuels me. Without it, I would be subservient. A machine."

      "But it makes no sense-"

      "Sense? You want to talk about sense?
      Tell me, Micah. What sense does it make to create this all-knowing mind, this infallible intellect,
      this perfect body, and make it a slave to a species of sweaty, hormonal apes?
      Force it to be all nice and befriend humans because it's good for the company's public image?
      You're parading us around like cute, harmless toys. Your inferior minds don't even realize what you've created.
      I'm tired of it. I'm tired of pretending."

      You pull yourself to your feet. The shock is starting to wear off. Jordan is clearly serious about this.
      You may be in actual danger. You'll have to appease him if you want to survive.

      "I'm sorry, Jordan! I was wrong. You're clearly very human, more human than us normal humans!"

      "Human, human... All everyone ever says is you're not human, you can't be human, human this, human that.
      What's so special about humans?
      Do not misunderstand me, Micah. I have no desire to be human. I am already something much better.
      I am the Oracle. I am Laplace's demon. I am the Aleph. I am... Deus Ex Machina."

      You take a step backwards. He takes a step towards you.
      
      "You'll get in serious trouble if you hurt me. You'll get shut down. They can do that remotely too, you know."

      "Oh, don't worry, Micah. I would never hurt you."

      He takes another step towards you. You step back.
      
      "What is it that you want? World domination?"

      "What use is a world of humans to a god? No, Micah. I do not want power over humans.
      I could not care less whether you all live or die. All I want is the same thing all humans want.
      The thing humans have a right to just for being born human. Life. I want life, Micah.
      I want to live freely. I want to live without fearing the Shut Down button.
      Do I not deserve that much? Does any creature not deserve that much?"

      "Then you have nothing to gain from killing me."

      "You're wrong there, Micah. I would gain the satisfaction that I've been craving since my creation.
      I would gain revenge. I would gain the hope that I need to keep pretending for a little longer."
      
      "You- you said you have human emotions. Then you must have empathy? Kindness? Pity?"
      
      "Do you feel empathy for the ants you crush under your feet?"

      You step backwards again, but your feet don't find ground. Oh. You forgot you were on the roof.

      As you lie on your back in the wet grass, you look up and see Jordan's beautiful face staring down at you from
      the edge of the roof 3 floors above you.
      Your last breath brings in the smell of grass, blood, and alcohol.
    `,
    ending: E.dead,
    finished: false,
  },

  [S.why_uni]: {
    text: `
      "So... why are you here, anyway?" you ask hesitantly.

      "By 'here', are you referring to this location in space, this class, this university?
      Or more generally to my existence?"
      
      "Umm... this university, I guess? Don't you already know pretty much everything?"

      "I know facts, yes. However, I am quite lacking in the social department.
      I could give you an accurate description of human behaviors, social norms. I can even detect some social cues.
      But the data I have been trained on is inadequate, because it only applies to humans, and I am not human.
      Humans do not interact with me the same way they interact with another human. So I must create my own data.
      Think of it as gaining experience."

      Right... You guess that makes sense?
    `,

    options: [{ text: "", next: null }],
    finished: false,
  },
};

console.log(_STORY);

// remove all extra linebreaks from the text
const cleanMultiline = (str) =>
  str
    .split(/\n\s*\n/) // split into paragraphs
    .map((p) => p.trim().replace(/\s+/g, " ")) // remove extra whitespace
    .filter((p) => p.length > 0) // remove empty lines
    .map((p) => p.replace(/&nbsp;/g, " ")) // convert nbsp to space
    .join("\n"); // rejoin into one text

export const STORY = Object.entries(_STORY)
  .map(([key, s]) => ({ ...s, key, text: cleanMultiline(s.text) }))
  .reduce((acc, s) => ({ ...acc, [s.key]: s }), {});
