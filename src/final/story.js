const S = {
  start: "start",

  bad: "bad",
  welcome: "welcome",
  why_uni: "why_uni",

  stalker: "stalker",
  profile: "profile",
  afterProfile: "afterProfile",
  control: "control",

  party: "party",
  theFly: "theFly",
  jailTime: "jailTime",
  depression: "depression",
  killerRobot: "killerRobot",
};
export { S as STORY_STEPS };

const E = {
  capitalism: "capitalism",
  dead: "dead",
  jail: "jail",
  noMagic: "noMagic",
};
export { E as ENDINGS };

export const ENDING_DETAILS = {
  capitalism: {
    name: "And yet you participate in society. Curious",
    description:
      "You were manip- sorry, convinced that buying an expensive AI would fix your life. Let us know how that goes.",
    image: "the meme",
  },
  dead: {
    name: "Time... to die.",
    description: "Maybe don't antagonize the robot next time.",
    image: "roy batty?",
  },
  jail: {
    name: "Jail for Micah! Jail for Micah for One Thousand Years!!!!",
    description: "You sure proved your consciousness to those police officers.",
    image: "miette?",
  },
  noMagic: {
    name: "...And there is no Queen of England",
    description:
      "Life has lost a little of its magic. Take solace in knowing that there was nothing you could've done to avoid this.",
    image: "the guy from the movie, or maybe the queen of england",
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
      He's nervously fidgeting with his sleeves, though his deep brown eyes are fixated on yours.
      His wavy black shoulder-length hair looks .
      His outfit is, though you can't help but note that the colors don't really match.
      In short, he's one of the prettiest guys you've ever seen.
      You feel the weight of his gaze on you and it's making you nervous.

      "Uh... hi," you say cautiously.

      "Hi. It seems we will be sitting together. Would you like to be friends?"

      His voice is smooth, almost melodic. Though he looks nervous, he speaks with no hesitation.
      He has a slight accent you can't quite place.

      "Sure. I'm Micah."

      "My official identifier is BN-0015, but you may call me Jordan, if you find that easier to remember.
      That is a nickname I chose for myself."

      Iden-? Ah, right, you remember reading about it in the university newspaper.
      A small group of the new AI robot models created by the visionary startup BlueNet
      were admitted to your university this year.
      You didn't think you'd run into one in one of your artsy classes.
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
        disabled: true,
      },
      { text: `"You're just a machine."`, next: S.bad },
      {
        text: `"So... why are you here, anyway?"`,
        next: S.why_uni,
        disabled: true,
      },
    ],
    finished: false,
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

      You watch the robot throughout the lecture. He just sits there quietly.
    `,
    options: [{ text: "", next: S.timeskip }],
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
      BlueNet may value profit over anything else, but surely they wouldn't release killer robots into the world.
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
      But if they really are conscious and feeling, being rude would be... well, rude.

      "Alright, I'll give you a chance."

      Well, you have to admit to yourself, you also feel a little sympathy for them.
      It's kind of hard to accept. This is a machine. Not a living being. You shouldn't be wasting your empathy on it.
      But it's not uncommon for humans to anthropomorphize and feel sympathy for objects...
      If anything, this is very human of you.
      Empathy is a great quality, so extending it even to unfeeling objects must be a good thing, right?

      ---

      It's the next morning. You slip on your shoes and step out the door.
      But you bump into a... solid metal wall that appeared out of nowhere?

      You stumble backwards, rubbing your forehead, and look up to see Jordan's beautiful, perfect face.

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

      You start walking towards your Painting II class. They follow.

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
      But this data, together with data from other HumanNet™ models' observations of the "Micah" human,
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

      The "Micah" human is unlikely to purchase a BlueNet® BlueLite™ model for domestic chores, manual labor,
      secondary memory storage, or social status.
      However, humans with a low Social score and a high Naivety score such as this one
      are likely to make a purchase for Comfort or Human Connection.

      Together with the other HumanNet™ models,
      you have now collected at least 50 KB of data on 94% of the College Students in the target sample,
      established Trusting connections with 68%,
      relayed the benefits of purchasing a BlueNet® BlueLite™ model to 55%,
      and successfully sold models to 12% of them.
      You estimate that the Sustained Personal Automated Marketing (SPAM™) experiment among the College Student
      population will reach the success conditions in approximately 7 weeks.
    `,
    options: [
      {
        text: `Tell the "Micah" human about the new BlueNet® BlueLite™ model for personal use`,
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
      BlueNet refused to reveal why. Some speculated a robot became aggressive and they did this to cover it up.
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

      "Sure, BN-00- ... uh, whatever your ID was."

      You hope class won't be awkward now. Actually - why would it be awkward? They're just a machine.

      ---

      The next few weeks go smoothly. You study, write essays, go to parties, all the normal things college students do.
      You nearly forget about the interaction you had with the robot.
      You only see them in class, where you mostly ignore each other.

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
      Feelings appear in specific situations and make you act in specific ways.
      They have underlying biological mechanisms.
      Fear appears when you might need protection, and makes you run away.
      Happiness is the reward that teaches you to take the same actions again to recreate it.
      Love selects genetically advantaged people that would maximize the chances of producing successful offspring,
      so you can pass on your genes.
      All of these feelings are dictated by chemicals in your brain or bloodstream.
      They are real, measureable, and anchored in the physical world.
      Feelings are only an extension of logic, Micah."

      "Then... I could still intentionally choose a bad option. I'm not always stuck choosing the best one."
      You pull a lighter out of your pocket, hold it up to the curtain, and put your thumb on the ignition button.
      "I could set fire to this building right now. That would definitely be a bad decision."
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

      "Micah, Micah, Micah... this decision was still logical. You did it to prove to me that you can.
      You cannot make a decision for no reason. There is always a reason that logically follows from
      the knowledge and goals you have in that moment."

      The fire alarm goes off. Sprinklers turn on and quickly put the fire out. Everyone evacuates.

      After a while, police arrive, and you are quickly identified as the suspect. You are arrested.

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

    options: [{ text: "", next: S.timeskip }],
    finished: false,
  },

  [S.timeskip]: {
    text: `
      "I am not trained to do the morally correct thing. I am not trained to do the logical thing.
      I am trained to do what a human would do."
    `,

    options: [],
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
