 const textElement = document.getElementById('text')
//const pictureElement = document.getElementById("picture")
const optionButtonsElement = document.getElementById('option-buttons')
const element = document.getElementById("bg")

let state = {}

function startGame() {
  state = {}
  showTextNode(1)


}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  //pictureElement.src = textNode.picture
  element.style.backgroundImage = textNode.bg
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    //picture:"images/boom.gif",
    text: 'You awaken with your entire body trapped under rubble. You are in darkness. With your hands, you can feel the rubble and dust of crumbled concrete surrounding you. Crushing each of your legs is two large blocks of concrete, not appearing to budge at all, and rendering your legs useless and immovable. You find it difficult to breathe, and when you do, you feel a sharp pain in your lungs.',
    options: [
      {
        text: 'Try and call for help',
        /*setState: { blueGoo: true },*/
        nextText: 2
      },
      {
        text: 'Attempt to wiggle free',
        nextText: 3
      },
      {
        text: 'Stay there and die',
        nextText: 4
      },
      {
        text: 'ᕕ( ᐛ )ᕗ',
        nextText: 999
      }
    ]
  },
  {
    id: 2,
    //picture:"images/eb4.gif",
    bg:"url('images/boom.gif')",
    text: 'You try to make the loudest sound you can, but your extreme dehydration means you can only let out a wheeze. It seems that trying to call for help is futile.',
    options: [
      {
        text: 'Try and wiggle free',
        nextText: 3
      },
      {
        text: "Give up and die",
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: 'After an hour of excruciating pain, your legs are still completely trapped. Your clothes are torn and tattered, and your entire body is covered in cuts and bruises. You wipe blood from your eyes, as a large gash on your forehead drips blood down your face. By now, trapped under the rubble, you have accepted your fate, that you will die in that exact place. All that is left now is to wait for your organs to slowly fail.',
    bg:"url('images/man_god.gif')",
    options: [
      {
        text: 'Give up and die',
        nextText: 4
      },
      {
        text: 'Try and call for help',
        nextText: 2
      },
    ]
  },
  {
    id: 4,
    bg: "url('images/chickenegg.gif')",
    text: 'For the next six hours, pinned under crushing rubble, you slowly drift in and out of consciousness, beginning to succumb to thirst and your wounds. Just as you close your eyes, waiting for death, you hear a loud thump in the distance. Your eyes slowly peel open, and after a mere four seconds, you hear another thump. Your heart begins racing. After 30 long seconds of silence, the thumping begins again, however, this time it occurs at a much more rapid pace. It sounds similar to a horse’s gallop, although it violently shakes the entire ground. As the rumbling gets louder and louder, you wonder to yourself what terrifying creature could be causing this. Little did you know, that question would be answered, very soon…',
    options: [
      {
        text: 'Continue',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    text: 'The rumbling is now so loud and violent you feel as if the source is merely meters from your body. Your heart races in fear, but you realize that succumbing to any other fate than dying of thirst in rubble is a positive option in this scenario. You are snapped out of thought when a large, armored spike penetrates through the rubble and stabs into the ground next to your head. Terrified, but unable to move from your position to avoid this threat, you watch the spike slowly remove from the ground, pulling large chunks of concrete with it, and leaving a gap in the rubble. For the first time in hours, you can see daylight again! However, this brief moment of hope is interrupted by another spike, this time stabbing between your legs, before pulling from the ground, flinging concrete with it. There is once again silence for another 30 seconds, before the intense gallop-like rumbling continues, this time decrescendoing into the distance. It seems that whatever was stabbing the ground has left, leaving you with what is left of your life.',
    options: [
      {
        text: 'Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: "Peering through the gap in the rubble left by the spike, you can see daylight, which burns your eyes. Struck with hope, you attempt to call out to anyone outside, however, you are only able to let out a pathetic wheeze. “Help”, you quietly breathe, your throat bone dry, “help me, help, please, help”. Believing this to be a futile effort, you stop, defeated, but only a few seconds later, you hear a voice call out. “Save your breath”, it rasps, “I can hear you”. A face peers down the hole, looking you in the eye. It appears to belong to a man, older, looking to be in his 50s. His head is shaved and his clothes are torn up. He stares at you for a few seconds and then looks across the horizon. “Listen here”, he says to you, “We can both see you’re in a predicament, and right now you probably want to escape that predicament, correct?” You attempt to wheeze, but are cut off. “Don’t bother answering. Listen, I’ll give you two options”, he says, holding a long rebar with both of his hands, “either I take this here, and jam it down that hole into your left eye so hard it damn might crack the back of your skull when it hits it. Not that you would know it’s happening, though. You’re free from this nightmare, you have a metal bar going through your head, that’s the end of your story. Game over. Bye-bye.” He sneers. “Or, I'll give you a hand and try to get you out of this pile of garbage. But, be warned, when you start to see some of this shit that’s out here, you might start wishing you got the bar in your skull. Got it?”",
    options: [
      {
        text: 'Ask him to kill you',
        nextText: 7
      },
      {
        text: 'Ask him to save you',
        nextText: 8
      },
    ]
  },
  {
    id: 7,
    text: 'Looking up through the hole, you see him brace to spear the bar through your skull, and in a powerful downward motion it pierces your eye and instantly kills you. You die in the rubble and nobody ever finds your skeleton. Sad! Unfortunately, your journey ends here... ',
    options: [
      {
        text: 'Restart?',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: "The man speaks. “Lemme tell ya, the other option would have been much easier for both of us, but whatever. Listen, getting all this rubble off you might prove to be a real pain in the ass.” He looks at the pile for 10 long seconds, and then says “alright”, and proceeds to begin jamming the bar under a large piece of concrete on top of you, then forcefully pressing down on the other end with his boot in order to gain leverage. With ease it rolls off the pile, leaving you with relief as your body feels lighter. After some time has passed, he finally levers the last chunk of concrete off your body. Finally able to move again, you try to stand up, but your legs collapse under you. “Here”, says the man, handing you the bar he was holding. “Use this.” Using it as an improvised walking stick, you stand up, weak and weary, but able to maintain your footing. “So”, says the man, “from that jumpsuit I can tell you were locked up in the hole too.” Looking at his attire, you see he is wearing the same uniform as you.",
    options: [
      {
        text: '"What happened?"',
        nextText: 9
      },
      {
        text: '"Who are you?"',
        nextText: 10
      },
    ]
  },
  {
    id: 9,
    bg: "url('images/fallouthead.png')",
    text: "“I was waiting for you to ask that. Well, if I’m being honest, I’m not even sure myself. But what <i>you</i> need to know, is that there are huge, tall, creatures walking the surface of the earth now. Came in a stampede and, as you know, completely destroyed the prison over there, that one you and I, were both locked up in… Slaughtered nearly everyone” You stare at him blankly. “Creatures… what do you m-” you begin to speak, but he cuts you off. “Listen, you won’t understand until you see one for yourself, and I’m pretty sure you got damn close earlier. Stabbed its legs right next to your face. You should be damn thankful you’re even alive right now. Now, before another one decides to show up and skewer both of us to death, let’s get the hell out of here.” This seems to leave you with more questions than answers, but his urgency leaves you no time to ask them.",
    options: [
      {
        text: 'Continue',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    bg: "url('images/fallouthead.png')",
    text: `“Who am I? Well, me, I’m just like you… locked up… 30 years… sentence was almost over, too”. Then, a stampede of… these things, they came and destroyed the whole place. Slaughtered near everyone in there. Well, I say near, because, there’s you and me, of course. Only survivors, from what I can see”. He gestures to the giant expanse of rubble which was once a giant prison, now crumbled and destroyed. “What things?” You ask. “Soon enough,” he mutters, “You’ll see. And I’m pretty sure you got damn close earlier. Stabbed its legs right next to your face. You should be damn thankful you’re even alive right now. Now, before another one decides to show up and skewer both of us to death, let’s get the hell out of here.” This seems to leave you with more questions than answers, but his urgency leaves you no time to ask them.`,
    options: [
      {
        text: 'Continue',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    bg:"url('images/wasteland.png')",
    text: `“Alright, listen. We need to get out of here.” He says. Gesturing to the horizon he directs your gaze to a range of mountains. “We should head up there to get a view of the area. Supplies are sparse though. From what I've seen there’s not much we can salvage from the rubble here. It might be a good idea to head to the town so we can get some food and water and something to patch up your wounds. Be warned, though, any areas with high populations probably attract those things more. So, what’s it gonna be?”`,
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  },
  {
    id: 999,
    text: 'ᕕ( ᐛ )ᕗ',
    bg: "url('images/garywhite.gif')",
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()
