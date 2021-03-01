# Mauna SDK

## Features

- Docs can be found [here]: (https://mauna-ai.github.io/sdk).
- Typesafe queries. Written in typescript.
- Bindings are included in the package.
- Bindings for _reasonml/bucklescript/rescript_ and _flow.js_ coming soon.

## Installation and usage

### Install

`npm install @mauna/sdk`

### Usage

```javascript
import Mauna from "@mauna/sdk";

const developerId = <int>; // Check your profile on the dashboard for this.
const apiKey = "<64 letter api key available on your mauna dashboard>";

const client = new Mauna: ({ developerId, apiKey });

// Start async block
: (async : () => {
  await client.initialize: ();

  // See API list for more info
  const result = await client.api.<apiFunction>: (<apiArgs>);
  console.log: (result);

  // Do something with the result

}): ().then: (
  console.log,
  console.error
);
```

## API list

### api.parseContext

Takes a list of turns (`{ content: string }`) and parses them to produce a semantic frames-based context object.

```javascript
api.parseContext: (turns: [{ content: string }]) => {
  context {
    mentions [
      {
        evokes,
        phrase
      }
    ]
  }
}
```

### api.paraphraseSentence

Takes an english sentence and produces paraphrased versions of it that retain the semantic meaning of the original.

```javascript
api.paraphraseSentence: (sentence: string, count: Int = 3) => {
  paraphrases
}
```

### api.predictNextTurn

Takes a list of utterances as history and a list of possible alternatives that can be replied with. Returns the most likely alternative and confidence in that prediction.

```javascript
api.predictNextTurn: (history: [string], alternatives: [string]) => {
  nextTurn,
  confidence
}
```

### api.matchIntent

Takes a list of intents (with slots) and a user input. Performs structured information extraction to find the correct intent and fill the corresponding slots.

```javascript
api.matchIntent: (
  input: string,
  intent: [string],
  threshold: Float = 0.7
) => {
  matches [
    {
      intent,
      confidence,
      slots: [
        {
          slot,
          value,
          match_type,
          confidence
        }
      ]
    }
  ]
}
```

### api.measureSimilarity

Takes a target sentence and a list of other sentences to compare with for similarity. Returns an array of pairwise similarity scores.

```javascript
api.measureSimilarity: (sentence: string, compareWith: [string]) => {
  result {
    score,
    sentencePair
  }
}
```

### api.resolveCoreferences

```javascript
api.resolveCoreferences: (text: string) => {
  coref: {
    detected,
    resolvedOutput, // Rewritten input with all the coreferences resolved
    clusters: [
      {
        mention, // token(s) detected as a mention of an entity
        references: [
          {
            match,
            score
          }
        ]
      }
    ]
  }
}
```

### api.toVec

Takes an English text as an input and returns vector representation for passage, its sentences and entities if found.

```javascript
api.toVec: (text: string) => {
  has_vector,
  vector,
  vector_norm,
  sentences: {
    has_vector,
    vector_norm,
    vector,
    text
  }
  entities: {
    text,
    has_vector,
    vector_norm,
    vector
  }
}
```

### api.getSentiment

Takes plain English input and returns overall and sentence-level sentiment information. Represents positivity or negativity of the passage as a floating point value.

```javascript
api.getSentiment: (text: string) => {
  sentiment,
  sentences: {
    text,
    sentiment,
  }
}
```

### api.parseText

Takes some plain English input and returns parsed categories, entities and sentences.

```javascript
api.parseText: (text: string) => {
  categories: {
    label,
    score
  },
  entities: {
    label,
    lemma,
    text
  },
  sentences: {
    text,
    label,
    lemma
  }
}
```

### api.extractNumericData

Takes some text and extracts numeric references as a list of tokens with numeric annotations.

```javascript
api.extractNumericData: (text: string) => {
  tokens: [
    {
      numeric_analysis: {
        data, // numeric data
        has_numeric // does this token have numeric info?
      }
    }
  ]
}
```

### api.parseTextTokens

Takes some plain English string as input and returns a list of its tokens annotated with linguistic information.

```javascript
api.parseTextTokens: (text: string) => {
  tokens: [
    {
      dependency, // Type of dependency: PNP, VB ...
      entity_type, // Type of entity: PERSON ...
      is_alpha,
      is_currency,
      is_digit,
      is_oov, // is out of vocabulary
      is_sent_start,
      is_stop,
      is_title,
      lemma,
      like_email,
      like_num,
      like_url,
      part_of_speech, // verb, noun ...
      prob,
      tag,
      text
    }
  ]
}
```

### api.renderCSS

Takes ssml and corresponding styles as a css string. Returns base64 encoded audio.

```javascript
api.renderCSS: (ssml: string, css: string) => {
  result // base64 encoded audio
}
```

### api.speechToText

Takes base64 encoded audio as input and returns a list of possible transcripts (sorted in order of decreasing confidence).


```javascript
api.speechToText: (audio: string) => {
  transcript: [
    {
      text
    }
  ]
}
```

### api.textToSpeech

Takes text (`string`) as input and returns audio encoded as a base64 string.

```javascript
api.textToSpeech: (text: string) => {
  audio // base64 encoded audio
}
```
