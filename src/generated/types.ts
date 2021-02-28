export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /**
   * Leverages the internal Python implmeentation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: any;
  _text: any;
  app_status: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  tstzrange: any;
};

export enum AceOutputType {
  Drs = 'drs',
  Drshtml = 'drshtml',
  Drspp = 'drspp',
  Drsxml = 'drsxml',
  Fol = 'fol',
  Owlfss = 'owlfss',
  Owlfsspp = 'owlfsspp',
  Owlrdf = 'owlrdf',
  Owlxml = 'owlxml',
  Paraphrase = 'paraphrase',
  Paraphrase1 = 'paraphrase1',
  Paraphrase2 = 'paraphrase2',
  Pnf = 'pnf',
  Ruleml = 'ruleml',
  Syntax = 'syntax',
  Syntaxd = 'syntaxd',
  Syntaxdpp = 'syntaxdpp',
  Syntaxpp = 'syntaxpp',
  Tokens = 'tokens',
  Tptp = 'tptp'
}

export type AceResult = {
  __typename?: 'ACEResult';
  result?: Maybe<Scalars['String']>;
};

export enum AudioEncoding {
  AudioEncodingUnspecified = 'AUDIO_ENCODING_UNSPECIFIED',
  Linear16 = 'LINEAR16',
  Mp3 = 'MP3',
  OggOpus = 'OGG_OPUS'
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Categories applied to whole document (label, score), or to spans (start, end, label, score). */
export type Cat = {
  __typename?: 'Cat';
  end?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Int']>;
};

export type ComposeResult = {
  __typename?: 'ComposeResult';
  result?: Maybe<Scalars['JSON']>;
};

export type Container = {
  /** A boolean value indicating whether a word vector is associated with the object. */
  has_vector?: Maybe<Scalars['Boolean']>;
  /** A scalar value indicating the positivity or negativity of the object. */
  sentiment?: Maybe<Scalars['Float']>;
  /** Verbatim text content. */
  text?: Maybe<Scalars['String']>;
  /** Text content, with trailing space character if present. */
  text_with_ws?: Maybe<Scalars['String']>;
  /** A real-valued meaning representation. */
  vector?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The L2 norm of the document’s vector representation. */
  vector_norm?: Maybe<Scalars['Float']>;
};

export type ContextObject = {
  content?: Maybe<Scalars['String']>;
};

export type ContextResult = {
  __typename?: 'ContextResult';
  context?: Maybe<SlingDocument>;
};

export type CorefCluster = {
  __typename?: 'CorefCluster';
  i?: Maybe<Scalars['Int']>;
};

export type CorefScores = {
  __typename?: 'CorefScores';
  mention?: Maybe<Scalars['String']>;
  scores?: Maybe<Array<Maybe<Scores>>>;
};

export type DialogAlternative = {
  __typename?: 'DialogAlternative';
  alternative?: Maybe<Scalars['String']>;
  confidence?: Maybe<Scalars['Float']>;
};

export type DocExtension = {
  __typename?: 'DocExtension';
  coref_clusters?: Maybe<Array<Maybe<CorefCluster>>>;
  coref_resolved?: Maybe<Scalars['String']>;
  coref_scores?: Maybe<Array<Maybe<CorefScores>>>;
  has_coref?: Maybe<Scalars['Boolean']>;
  has_nfh?: Maybe<Scalars['Boolean']>;
  nfh?: Maybe<Array<Maybe<Span>>>;
  nfh_items?: Maybe<Array<Maybe<Span>>>;
};

export enum Encoding {
  Amr = 'AMR',
  AmrWb = 'AMR_WB',
  EncodingUnspecified = 'ENCODING_UNSPECIFIED',
  Flac = 'FLAC',
  Linear16 = 'LINEAR16',
  Mp3 = 'MP3',
  Mulaw = 'MULAW',
  OggOpus = 'OGG_OPUS',
  SpeexWithHeaderByte = 'SPEEX_WITH_HEADER_BYTE'
}

export type InputPipe = {
  context?: Maybe<Scalars['JSON']>;
  op?: Maybe<Scalars['String']>;
  transform: Scalars['String'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type MatchIntentOutput = {
  __typename?: 'MatchIntentOutput';
  matches?: Maybe<Array<Maybe<PhraseMatch>>>;
  warnings?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NlpBatch = {
  __typename?: 'NlpBatch';
  batch_id?: Maybe<Scalars['UUID']>;
  docs?: Maybe<Array<Maybe<NlpDoc>>>;
};

/**
 * A container for accessing linguistic annotations.
 * Access sentences and named entities.
 */
export type NlpDoc = Container & {
  __typename?: 'NlpDoc';
  cats?: Maybe<Array<Maybe<Cat>>>;
  /** The named entities in the document. Returns a list of named entity Span objects, if the entity recognizer has been applied. */
  ents?: Maybe<Array<Maybe<Span>>>;
  extension?: Maybe<DocExtension>;
  /** A boolean value indicating whether a word vector is associated with the object. */
  has_vector?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  /**
   * The base noun phrases in the document.
   *     Returns a list of base noun-phrase Span objects, if the document has been syntactically parsed.
   *     A base noun phrase, or “NP chunk”, is a noun phrase that does not permit other NPs to be nested within it – so no NP-level coordination, no prepositional phrases, and no relative clauses.
   */
  noun_chunks?: Maybe<Array<Maybe<Span>>>;
  sentiment?: Maybe<Scalars['Float']>;
  /**
   * The the sentences in the document.
   *     Sentence spans have no label. To improve accuracy on informal texts, spaCy calculates sentence boundaries from the syntactic dependency parse.
   *     If the parser is disabled, the sents iterator will be unavailable.
   */
  sents?: Maybe<Array<Maybe<Span>>>;
  /** Verbatim text content. */
  text?: Maybe<Scalars['String']>;
  /** Text content, with trailing space character if present. */
  text_with_ws?: Maybe<Scalars['String']>;
  /** The tokens of the document. */
  tokens?: Maybe<Array<Maybe<Token>>>;
  /** A real-valued meaning representation. */
  vector?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The L2 norm of the document’s vector representation. */
  vector_norm?: Maybe<Scalars['Float']>;
};

export type PairSimilarity = {
  __typename?: 'PairSimilarity';
  score?: Maybe<Scalars['Float']>;
  sentencePair?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Paraphrase = {
  __typename?: 'Paraphrase';
  paraphrases?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PhraseMatch = {
  __typename?: 'PhraseMatch';
  matched_intent?: Maybe<Scalars['String']>;
  similarity?: Maybe<Scalars['Float']>;
  word_matches?: Maybe<Array<Maybe<WordMatch>>>;
};

export type SsmlResult = {
  __typename?: 'SSMLResult';
  ssml?: Maybe<Scalars['String']>;
};

export type SttConfig = {
  encoding?: Maybe<Encoding>;
  languageCode?: Maybe<Scalars['String']>;
  maxAlternatives?: Maybe<Scalars['Int']>;
  profanityFilter?: Maybe<Scalars['Boolean']>;
  sampleRate?: Maybe<Scalars['Int']>;
};

export type SttResult = {
  __typename?: 'STTResult';
  alternatives?: Maybe<Array<Maybe<TextAlternative>>>;
};

export type Scores = {
  __typename?: 'Scores';
  mention?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
};

export type SentenceSimilarityScores = {
  __typename?: 'SentenceSimilarityScores';
  result?: Maybe<Array<Maybe<PairSimilarity>>>;
};

export type ServiceInfo = {
  __typename?: 'ServiceInfo';
  enums?: Maybe<Scalars['String']>;
  inputs?: Maybe<Scalars['String']>;
  interfaces?: Maybe<Scalars['String']>;
  objects?: Maybe<Scalars['String']>;
  queries?: Maybe<Scalars['String']>;
  scalars?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
};

export enum ServiceName {
  AceParser = 'ace_parser',
  ComposeServices = 'compose_services',
  ContextFrameParser = 'context_frame_parser',
  IntentMatcher = 'intent_matcher',
  NluService = 'nlu_service',
  ParaphraseSentences = 'paraphrase_sentences',
  SpeechToText = 'speech_to_text',
  TextToSpeech = 'text_to_speech',
  TurnPrediction = 'turn_prediction',
  VoiceCssRender = 'voice_css_render'
}

export type SlingDocument = {
  __typename?: 'SlingDocument';
  mentions?: Maybe<Array<Maybe<SlingMention>>>;
  text?: Maybe<Scalars['String']>;
};

export type SlingMention = {
  __typename?: 'SlingMention';
  evokes?: Maybe<Array<Maybe<Scalars['String']>>>;
  phrase?: Maybe<Scalars['String']>;
};

/** A slice from a Doc object. */
export type Span = Container & {
  __typename?: 'Span';
  conjuncts?: Maybe<Array<Maybe<Token>>>;
  end?: Maybe<Scalars['Int']>;
  ents?: Maybe<Array<Maybe<Span>>>;
  extension?: Maybe<SpanExtension>;
  /** A boolean value indicating whether a word vector is associated with the object. */
  has_vector?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  lefts?: Maybe<Array<Maybe<Token>>>;
  lemma?: Maybe<Scalars['String']>;
  rights?: Maybe<Array<Maybe<Token>>>;
  root?: Maybe<Token>;
  /** A scalar value indicating the positivity or negativity of the object. */
  sentiment?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['Int']>;
  subtree?: Maybe<Array<Maybe<Token>>>;
  /** Verbatim text content. */
  text?: Maybe<Scalars['String']>;
  /** Text content, with trailing space character if present. */
  text_with_ws?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<Maybe<Token>>>;
  /** A real-valued meaning representation. */
  vector?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The L2 norm of the document’s vector representation. */
  vector_norm?: Maybe<Scalars['Float']>;
};

export type SpanExtension = {
  __typename?: 'SpanExtension';
  coref_cluster?: Maybe<CorefCluster>;
  coref_scores?: Maybe<Array<Maybe<Scores>>>;
  has_nfh?: Maybe<Scalars['Boolean']>;
  is_coref?: Maybe<Scalars['Boolean']>;
  is_nfh?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

export type TtsConfig = {
  encoding?: Maybe<AudioEncoding>;
  languageCode?: Maybe<Scalars['String']>;
  sampleRate?: Maybe<Scalars['Float']>;
  voiceGender?: Maybe<Scalars['String']>;
};

export type TtsResult = {
  __typename?: 'TTSResult';
  audioB64?: Maybe<Scalars['String']>;
};

export type TextAlternative = {
  __typename?: 'TextAlternative';
  transcript?: Maybe<Scalars['String']>;
};

/** An individual token — i.e. a word, punctuation symbol, whitespace, etc. */
export type Token = Container & {
  __typename?: 'Token';
  ancestors?: Maybe<Array<Maybe<Token>>>;
  children?: Maybe<Array<Maybe<Token>>>;
  cluster?: Maybe<Scalars['Int']>;
  conjuncts?: Maybe<Array<Maybe<Token>>>;
  dep?: Maybe<Scalars['String']>;
  /** The ending character offset of the token within the parent document. */
  end?: Maybe<Scalars['Int']>;
  ent_iob?: Maybe<Scalars['String']>;
  ent_type?: Maybe<Scalars['String']>;
  extension?: Maybe<TokenExtension>;
  /** A boolean value indicating whether a word vector is associated with the object. */
  has_vector?: Maybe<Scalars['Boolean']>;
  head?: Maybe<Token>;
  /** The index of the token within the parent document. */
  id?: Maybe<Scalars['Int']>;
  is_alpha?: Maybe<Scalars['Boolean']>;
  is_ascii?: Maybe<Scalars['Boolean']>;
  is_bracket?: Maybe<Scalars['Boolean']>;
  is_currency?: Maybe<Scalars['Boolean']>;
  is_digit?: Maybe<Scalars['Boolean']>;
  is_left_punct?: Maybe<Scalars['Boolean']>;
  is_lower?: Maybe<Scalars['Boolean']>;
  is_oov?: Maybe<Scalars['Boolean']>;
  is_punct?: Maybe<Scalars['Boolean']>;
  is_quote?: Maybe<Scalars['Boolean']>;
  is_right_punct?: Maybe<Scalars['Boolean']>;
  is_sent_start?: Maybe<Scalars['Boolean']>;
  is_space?: Maybe<Scalars['Boolean']>;
  is_stop?: Maybe<Scalars['Boolean']>;
  is_title?: Maybe<Scalars['Boolean']>;
  is_upper?: Maybe<Scalars['Boolean']>;
  lang?: Maybe<Scalars['String']>;
  left_edge?: Maybe<Token>;
  lefts?: Maybe<Array<Maybe<Token>>>;
  lemma?: Maybe<Scalars['String']>;
  like_email?: Maybe<Scalars['Boolean']>;
  like_num?: Maybe<Scalars['Boolean']>;
  like_url?: Maybe<Scalars['Boolean']>;
  lower?: Maybe<Scalars['String']>;
  norm?: Maybe<Scalars['String']>;
  /**
   * Verbatim text content (identical to Token.text).
   *     Exists mostly for consistency with the other attributes.
   */
  orth?: Maybe<Scalars['String']>;
  /** Coarse-grained part-of-speech. */
  pos?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  prob?: Maybe<Scalars['Float']>;
  right_edge?: Maybe<Token>;
  rights?: Maybe<Array<Maybe<Token>>>;
  /** A scalar value indicating the positivity or negativity of the object. */
  sentiment?: Maybe<Scalars['Float']>;
  shape?: Maybe<Scalars['String']>;
  /** The starting character offset of the token within the parent document. */
  start?: Maybe<Scalars['Int']>;
  subtree?: Maybe<Array<Maybe<Token>>>;
  suffix?: Maybe<Scalars['String']>;
  /** Fine-grained part-of-speech. */
  tag?: Maybe<Scalars['String']>;
  /** Verbatim text content. */
  text?: Maybe<Scalars['String']>;
  /** Text content, with trailing space character if present. */
  text_with_ws?: Maybe<Scalars['String']>;
  /** A real-valued meaning representation. */
  vector?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /** The L2 norm of the document’s vector representation. */
  vector_norm?: Maybe<Scalars['Float']>;
  whitespace?: Maybe<Scalars['String']>;
};

export type TokenExtension = {
  __typename?: 'TokenExtension';
  coref_clusters?: Maybe<Array<Maybe<CorefCluster>>>;
  in_coref?: Maybe<Scalars['Boolean']>;
  is_deter_nfh?: Maybe<Scalars['Boolean']>;
  is_implicit?: Maybe<Scalars['Boolean']>;
  is_nfh?: Maybe<Scalars['Boolean']>;
  nfh_head?: Maybe<Scalars['String']>;
};


export type WordMatch = {
  __typename?: 'WordMatch';
  explanation?: Maybe<Scalars['String']>;
  extracted_word?: Maybe<Scalars['String']>;
  match_type?: Maybe<Scalars['String']>;
  similarity?: Maybe<Scalars['Float']>;
  slot?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: Maybe<Scalars['_text']>;
  _gt?: Maybe<Scalars['_text']>;
  _gte?: Maybe<Scalars['_text']>;
  _in?: Maybe<Array<Scalars['_text']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_text']>;
  _lte?: Maybe<Scalars['_text']>;
  _neq?: Maybe<Scalars['_text']>;
  _nin?: Maybe<Array<Scalars['_text']>>;
};


/** Boolean expression to compare columns of type "app_status". All fields are combined with logical 'AND'. */
export type App_Status_Comparison_Exp = {
  _eq?: Maybe<Scalars['app_status']>;
  _gt?: Maybe<Scalars['app_status']>;
  _gte?: Maybe<Scalars['app_status']>;
  _in?: Maybe<Array<Scalars['app_status']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['app_status']>;
  _lte?: Maybe<Scalars['app_status']>;
  _neq?: Maybe<Scalars['app_status']>;
  _nin?: Maybe<Array<Scalars['app_status']>>;
};

/** columns and relationships of "apps" */
export type Apps = {
  __typename?: 'apps';
  /** An array relationship */
  conversations: Array<Conversations>;
  /** An aggregate relationship */
  conversations_aggregate: Conversations_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  developer: Developers;
  developer_id: Scalars['Int'];
  /** An array relationship */
  kv_store: Array<Kv_Store>;
  /** An aggregate relationship */
  kv_store_aggregate: Kv_Store_Aggregate;
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
  scope_name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  status: Scalars['app_status'];
};


/** columns and relationships of "apps" */
export type AppsConversationsArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsConversations_AggregateArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsKv_StoreArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsKv_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "apps" */
export type Apps_Aggregate = {
  __typename?: 'apps_aggregate';
  aggregate?: Maybe<Apps_Aggregate_Fields>;
  nodes: Array<Apps>;
};

/** aggregate fields of "apps" */
export type Apps_Aggregate_Fields = {
  __typename?: 'apps_aggregate_fields';
  avg?: Maybe<Apps_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Apps_Max_Fields>;
  min?: Maybe<Apps_Min_Fields>;
  stddev?: Maybe<Apps_Stddev_Fields>;
  stddev_pop?: Maybe<Apps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Apps_Stddev_Samp_Fields>;
  sum?: Maybe<Apps_Sum_Fields>;
  var_pop?: Maybe<Apps_Var_Pop_Fields>;
  var_samp?: Maybe<Apps_Var_Samp_Fields>;
  variance?: Maybe<Apps_Variance_Fields>;
};


/** aggregate fields of "apps" */
export type Apps_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Apps_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "apps" */
export type Apps_Aggregate_Order_By = {
  avg?: Maybe<Apps_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Apps_Max_Order_By>;
  min?: Maybe<Apps_Min_Order_By>;
  stddev?: Maybe<Apps_Stddev_Order_By>;
  stddev_pop?: Maybe<Apps_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Apps_Stddev_Samp_Order_By>;
  sum?: Maybe<Apps_Sum_Order_By>;
  var_pop?: Maybe<Apps_Var_Pop_Order_By>;
  var_samp?: Maybe<Apps_Var_Samp_Order_By>;
  variance?: Maybe<Apps_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Apps_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "apps" */
export type Apps_Arr_Rel_Insert_Input = {
  data: Array<Apps_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Apps_On_Conflict>;
};

/** aggregate avg on columns */
export type Apps_Avg_Fields = {
  __typename?: 'apps_avg_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "apps" */
export type Apps_Avg_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "apps". All fields are combined with a logical 'AND'. */
export type Apps_Bool_Exp = {
  _and?: Maybe<Array<Apps_Bool_Exp>>;
  _not?: Maybe<Apps_Bool_Exp>;
  _or?: Maybe<Array<Apps_Bool_Exp>>;
  conversations?: Maybe<Conversations_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  developer?: Maybe<Developers_Bool_Exp>;
  developer_id?: Maybe<Int_Comparison_Exp>;
  kv_store?: Maybe<Kv_Store_Bool_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  scope_name?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  status?: Maybe<App_Status_Comparison_Exp>;
};

/** unique or primary key constraints on table "apps" */
export enum Apps_Constraint {
  /** unique or primary key constraint */
  AppsObjectIdKey = 'apps_object_id_key',
  /** unique or primary key constraint */
  AppsSlugKey = 'apps_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Apps_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Apps_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Apps_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "apps" */
export type Apps_Inc_Input = {
  developer_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "apps" */
export type Apps_Insert_Input = {
  conversations?: Maybe<Conversations_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  developer?: Maybe<Developers_Obj_Rel_Insert_Input>;
  developer_id?: Maybe<Scalars['Int']>;
  kv_store?: Maybe<Kv_Store_Arr_Rel_Insert_Input>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['app_status']>;
};

/** aggregate max on columns */
export type Apps_Max_Fields = {
  __typename?: 'apps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  developer_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "apps" */
export type Apps_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Apps_Min_Fields = {
  __typename?: 'apps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  developer_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "apps" */
export type Apps_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** response of any mutation on the table "apps" */
export type Apps_Mutation_Response = {
  __typename?: 'apps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Apps>;
};

/** input type for inserting object relation for remote table "apps" */
export type Apps_Obj_Rel_Insert_Input = {
  data: Apps_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Apps_On_Conflict>;
};

/** on conflict condition type for table "apps" */
export type Apps_On_Conflict = {
  constraint: Apps_Constraint;
  update_columns: Array<Apps_Update_Column>;
  where?: Maybe<Apps_Bool_Exp>;
};

/** Ordering options when selecting data from "apps". */
export type Apps_Order_By = {
  conversations_aggregate?: Maybe<Conversations_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  developer?: Maybe<Developers_Order_By>;
  developer_id?: Maybe<Order_By>;
  kv_store_aggregate?: Maybe<Kv_Store_Aggregate_Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Apps_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "apps" */
export enum Apps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeveloperId = 'developer_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "apps" */
export type Apps_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  developer_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['app_status']>;
};

/** aggregate stddev on columns */
export type Apps_Stddev_Fields = {
  __typename?: 'apps_stddev_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "apps" */
export type Apps_Stddev_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Apps_Stddev_Pop_Fields = {
  __typename?: 'apps_stddev_pop_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "apps" */
export type Apps_Stddev_Pop_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Apps_Stddev_Samp_Fields = {
  __typename?: 'apps_stddev_samp_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "apps" */
export type Apps_Stddev_Samp_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Apps_Sum_Fields = {
  __typename?: 'apps_sum_fields';
  developer_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "apps" */
export type Apps_Sum_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** update columns of table "apps" */
export enum Apps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeveloperId = 'developer_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name',
  /** column name */
  Slug = 'slug',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Apps_Var_Pop_Fields = {
  __typename?: 'apps_var_pop_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "apps" */
export type Apps_Var_Pop_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Apps_Var_Samp_Fields = {
  __typename?: 'apps_var_samp_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "apps" */
export type Apps_Var_Samp_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Apps_Variance_Fields = {
  __typename?: 'apps_variance_fields';
  developer_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "apps" */
export type Apps_Variance_Order_By = {
  developer_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** columns and relationships of "atomic.data" */
export type Atomic_Data = {
  __typename?: 'atomic_data';
  event?: Maybe<Scalars['String']>;
  o_effect?: Maybe<Scalars['_text']>;
  o_react?: Maybe<Scalars['_text']>;
  o_want?: Maybe<Scalars['_text']>;
  prefix?: Maybe<Scalars['_text']>;
  x_attr?: Maybe<Scalars['_text']>;
  x_effect?: Maybe<Scalars['_text']>;
  x_intent?: Maybe<Scalars['_text']>;
  x_need?: Maybe<Scalars['_text']>;
  x_react?: Maybe<Scalars['_text']>;
  x_want?: Maybe<Scalars['_text']>;
};

/** aggregated selection of "atomic.data" */
export type Atomic_Data_Aggregate = {
  __typename?: 'atomic_data_aggregate';
  aggregate?: Maybe<Atomic_Data_Aggregate_Fields>;
  nodes: Array<Atomic_Data>;
};

/** aggregate fields of "atomic.data" */
export type Atomic_Data_Aggregate_Fields = {
  __typename?: 'atomic_data_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Atomic_Data_Max_Fields>;
  min?: Maybe<Atomic_Data_Min_Fields>;
};


/** aggregate fields of "atomic.data" */
export type Atomic_Data_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Atomic_Data_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "atomic.data". All fields are combined with a logical 'AND'. */
export type Atomic_Data_Bool_Exp = {
  _and?: Maybe<Array<Atomic_Data_Bool_Exp>>;
  _not?: Maybe<Atomic_Data_Bool_Exp>;
  _or?: Maybe<Array<Atomic_Data_Bool_Exp>>;
  event?: Maybe<String_Comparison_Exp>;
  o_effect?: Maybe<_Text_Comparison_Exp>;
  o_react?: Maybe<_Text_Comparison_Exp>;
  o_want?: Maybe<_Text_Comparison_Exp>;
  prefix?: Maybe<_Text_Comparison_Exp>;
  x_attr?: Maybe<_Text_Comparison_Exp>;
  x_effect?: Maybe<_Text_Comparison_Exp>;
  x_intent?: Maybe<_Text_Comparison_Exp>;
  x_need?: Maybe<_Text_Comparison_Exp>;
  x_react?: Maybe<_Text_Comparison_Exp>;
  x_want?: Maybe<_Text_Comparison_Exp>;
};

/** input type for inserting data into table "atomic.data" */
export type Atomic_Data_Insert_Input = {
  event?: Maybe<Scalars['String']>;
  o_effect?: Maybe<Scalars['_text']>;
  o_react?: Maybe<Scalars['_text']>;
  o_want?: Maybe<Scalars['_text']>;
  prefix?: Maybe<Scalars['_text']>;
  x_attr?: Maybe<Scalars['_text']>;
  x_effect?: Maybe<Scalars['_text']>;
  x_intent?: Maybe<Scalars['_text']>;
  x_need?: Maybe<Scalars['_text']>;
  x_react?: Maybe<Scalars['_text']>;
  x_want?: Maybe<Scalars['_text']>;
};

/** aggregate max on columns */
export type Atomic_Data_Max_Fields = {
  __typename?: 'atomic_data_max_fields';
  event?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Atomic_Data_Min_Fields = {
  __typename?: 'atomic_data_min_fields';
  event?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "atomic.data" */
export type Atomic_Data_Mutation_Response = {
  __typename?: 'atomic_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Atomic_Data>;
};

/** Ordering options when selecting data from "atomic.data". */
export type Atomic_Data_Order_By = {
  event?: Maybe<Order_By>;
  o_effect?: Maybe<Order_By>;
  o_react?: Maybe<Order_By>;
  o_want?: Maybe<Order_By>;
  prefix?: Maybe<Order_By>;
  x_attr?: Maybe<Order_By>;
  x_effect?: Maybe<Order_By>;
  x_intent?: Maybe<Order_By>;
  x_need?: Maybe<Order_By>;
  x_react?: Maybe<Order_By>;
  x_want?: Maybe<Order_By>;
};

/** select columns of table "atomic.data" */
export enum Atomic_Data_Select_Column {
  /** column name */
  Event = 'event',
  /** column name */
  OEffect = 'o_effect',
  /** column name */
  OReact = 'o_react',
  /** column name */
  OWant = 'o_want',
  /** column name */
  Prefix = 'prefix',
  /** column name */
  XAttr = 'x_attr',
  /** column name */
  XEffect = 'x_effect',
  /** column name */
  XIntent = 'x_intent',
  /** column name */
  XNeed = 'x_need',
  /** column name */
  XReact = 'x_react',
  /** column name */
  XWant = 'x_want'
}

/** input type for updating data in table "atomic.data" */
export type Atomic_Data_Set_Input = {
  event?: Maybe<Scalars['String']>;
  o_effect?: Maybe<Scalars['_text']>;
  o_react?: Maybe<Scalars['_text']>;
  o_want?: Maybe<Scalars['_text']>;
  prefix?: Maybe<Scalars['_text']>;
  x_attr?: Maybe<Scalars['_text']>;
  x_effect?: Maybe<Scalars['_text']>;
  x_intent?: Maybe<Scalars['_text']>;
  x_need?: Maybe<Scalars['_text']>;
  x_react?: Maybe<Scalars['_text']>;
  x_want?: Maybe<Scalars['_text']>;
};

/** columns and relationships of "conceptnet.data" */
export type Conceptnet_Data = {
  __typename?: 'conceptnet_data';
  end: Scalars['String'];
  relation: Scalars['String'];
  start: Scalars['String'];
  uri: Scalars['String'];
  weight: Scalars['numeric'];
};

/** aggregated selection of "conceptnet.data" */
export type Conceptnet_Data_Aggregate = {
  __typename?: 'conceptnet_data_aggregate';
  aggregate?: Maybe<Conceptnet_Data_Aggregate_Fields>;
  nodes: Array<Conceptnet_Data>;
};

/** aggregate fields of "conceptnet.data" */
export type Conceptnet_Data_Aggregate_Fields = {
  __typename?: 'conceptnet_data_aggregate_fields';
  avg?: Maybe<Conceptnet_Data_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Conceptnet_Data_Max_Fields>;
  min?: Maybe<Conceptnet_Data_Min_Fields>;
  stddev?: Maybe<Conceptnet_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Conceptnet_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Conceptnet_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Conceptnet_Data_Sum_Fields>;
  var_pop?: Maybe<Conceptnet_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Conceptnet_Data_Var_Samp_Fields>;
  variance?: Maybe<Conceptnet_Data_Variance_Fields>;
};


/** aggregate fields of "conceptnet.data" */
export type Conceptnet_Data_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Conceptnet_Data_Avg_Fields = {
  __typename?: 'conceptnet_data_avg_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "conceptnet.data". All fields are combined with a logical 'AND'. */
export type Conceptnet_Data_Bool_Exp = {
  _and?: Maybe<Array<Conceptnet_Data_Bool_Exp>>;
  _not?: Maybe<Conceptnet_Data_Bool_Exp>;
  _or?: Maybe<Array<Conceptnet_Data_Bool_Exp>>;
  end?: Maybe<String_Comparison_Exp>;
  relation?: Maybe<String_Comparison_Exp>;
  start?: Maybe<String_Comparison_Exp>;
  uri?: Maybe<String_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "conceptnet.data" */
export enum Conceptnet_Data_Constraint {
  /** unique or primary key constraint */
  DataStartRelationEndKey = 'data_start_relation_end_key',
  /** unique or primary key constraint */
  DataUriKey = 'data_uri_key'
}

/** input type for incrementing numeric columns in table "conceptnet.data" */
export type Conceptnet_Data_Inc_Input = {
  weight?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "conceptnet.data" */
export type Conceptnet_Data_Insert_Input = {
  end?: Maybe<Scalars['String']>;
  relation?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Conceptnet_Data_Max_Fields = {
  __typename?: 'conceptnet_data_max_fields';
  end?: Maybe<Scalars['String']>;
  relation?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Conceptnet_Data_Min_Fields = {
  __typename?: 'conceptnet_data_min_fields';
  end?: Maybe<Scalars['String']>;
  relation?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "conceptnet.data" */
export type Conceptnet_Data_Mutation_Response = {
  __typename?: 'conceptnet_data_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conceptnet_Data>;
};

/** on conflict condition type for table "conceptnet.data" */
export type Conceptnet_Data_On_Conflict = {
  constraint: Conceptnet_Data_Constraint;
  update_columns: Array<Conceptnet_Data_Update_Column>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};

/** Ordering options when selecting data from "conceptnet.data". */
export type Conceptnet_Data_Order_By = {
  end?: Maybe<Order_By>;
  relation?: Maybe<Order_By>;
  start?: Maybe<Order_By>;
  uri?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

/** select columns of table "conceptnet.data" */
export enum Conceptnet_Data_Select_Column {
  /** column name */
  End = 'end',
  /** column name */
  Relation = 'relation',
  /** column name */
  Start = 'start',
  /** column name */
  Uri = 'uri',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "conceptnet.data" */
export type Conceptnet_Data_Set_Input = {
  end?: Maybe<Scalars['String']>;
  relation?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Conceptnet_Data_Stddev_Fields = {
  __typename?: 'conceptnet_data_stddev_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Conceptnet_Data_Stddev_Pop_Fields = {
  __typename?: 'conceptnet_data_stddev_pop_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Conceptnet_Data_Stddev_Samp_Fields = {
  __typename?: 'conceptnet_data_stddev_samp_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Conceptnet_Data_Sum_Fields = {
  __typename?: 'conceptnet_data_sum_fields';
  weight?: Maybe<Scalars['numeric']>;
};

/** update columns of table "conceptnet.data" */
export enum Conceptnet_Data_Update_Column {
  /** column name */
  End = 'end',
  /** column name */
  Relation = 'relation',
  /** column name */
  Start = 'start',
  /** column name */
  Uri = 'uri',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Conceptnet_Data_Var_Pop_Fields = {
  __typename?: 'conceptnet_data_var_pop_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Conceptnet_Data_Var_Samp_Fields = {
  __typename?: 'conceptnet_data_var_samp_fields';
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Conceptnet_Data_Variance_Fields = {
  __typename?: 'conceptnet_data_variance_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Conceptnet_Search_Relations_Args = {
  limit_to?: Maybe<Scalars['numeric']>;
  search?: Maybe<Scalars['String']>;
};

/** columns and relationships of "conversations" */
export type Conversations = {
  __typename?: 'conversations';
  /** An object relationship */
  app: Apps;
  app_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  destroyed_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  end_user: End_Users;
  /** An array relationship */
  end_user_conversations: Array<End_User_Conversations>;
  /** An aggregate relationship */
  end_user_conversations_aggregate: End_User_Conversations_Aggregate;
  end_user_id: Scalars['Int'];
  /** An array relationship */
  kv_store: Array<Kv_Store>;
  /** An aggregate relationship */
  kv_store_aggregate: Kv_Store_Aggregate;
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
  scope_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  utterances: Array<Utterances>;
  /** An aggregate relationship */
  utterances_aggregate: Utterances_Aggregate;
};


/** columns and relationships of "conversations" */
export type ConversationsEnd_User_ConversationsArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsEnd_User_Conversations_AggregateArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsKv_StoreArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsKv_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "conversations" */
export type ConversationsUtterancesArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


/** columns and relationships of "conversations" */
export type ConversationsUtterances_AggregateArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};

/** aggregated selection of "conversations" */
export type Conversations_Aggregate = {
  __typename?: 'conversations_aggregate';
  aggregate?: Maybe<Conversations_Aggregate_Fields>;
  nodes: Array<Conversations>;
};

/** aggregate fields of "conversations" */
export type Conversations_Aggregate_Fields = {
  __typename?: 'conversations_aggregate_fields';
  avg?: Maybe<Conversations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Conversations_Max_Fields>;
  min?: Maybe<Conversations_Min_Fields>;
  stddev?: Maybe<Conversations_Stddev_Fields>;
  stddev_pop?: Maybe<Conversations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Conversations_Stddev_Samp_Fields>;
  sum?: Maybe<Conversations_Sum_Fields>;
  var_pop?: Maybe<Conversations_Var_Pop_Fields>;
  var_samp?: Maybe<Conversations_Var_Samp_Fields>;
  variance?: Maybe<Conversations_Variance_Fields>;
};


/** aggregate fields of "conversations" */
export type Conversations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Conversations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "conversations" */
export type Conversations_Aggregate_Order_By = {
  avg?: Maybe<Conversations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Conversations_Max_Order_By>;
  min?: Maybe<Conversations_Min_Order_By>;
  stddev?: Maybe<Conversations_Stddev_Order_By>;
  stddev_pop?: Maybe<Conversations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Conversations_Stddev_Samp_Order_By>;
  sum?: Maybe<Conversations_Sum_Order_By>;
  var_pop?: Maybe<Conversations_Var_Pop_Order_By>;
  var_samp?: Maybe<Conversations_Var_Samp_Order_By>;
  variance?: Maybe<Conversations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Conversations_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "conversations" */
export type Conversations_Arr_Rel_Insert_Input = {
  data: Array<Conversations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Conversations_On_Conflict>;
};

/** aggregate avg on columns */
export type Conversations_Avg_Fields = {
  __typename?: 'conversations_avg_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "conversations" */
export type Conversations_Avg_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "conversations". All fields are combined with a logical 'AND'. */
export type Conversations_Bool_Exp = {
  _and?: Maybe<Array<Conversations_Bool_Exp>>;
  _not?: Maybe<Conversations_Bool_Exp>;
  _or?: Maybe<Array<Conversations_Bool_Exp>>;
  app?: Maybe<Apps_Bool_Exp>;
  app_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  destroyed_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_user?: Maybe<End_Users_Bool_Exp>;
  end_user_conversations?: Maybe<End_User_Conversations_Bool_Exp>;
  end_user_id?: Maybe<Int_Comparison_Exp>;
  kv_store?: Maybe<Kv_Store_Bool_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  scope_name?: Maybe<String_Comparison_Exp>;
  utterances?: Maybe<Utterances_Bool_Exp>;
};

/** unique or primary key constraints on table "conversations" */
export enum Conversations_Constraint {
  /** unique or primary key constraint */
  ConversationsObjectIdKey = 'conversations_object_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Conversations_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Conversations_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Conversations_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "conversations" */
export type Conversations_Inc_Input = {
  app_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "conversations" */
export type Conversations_Insert_Input = {
  app?: Maybe<Apps_Obj_Rel_Insert_Input>;
  app_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  destroyed_at?: Maybe<Scalars['timestamptz']>;
  end_user?: Maybe<End_Users_Obj_Rel_Insert_Input>;
  end_user_conversations?: Maybe<End_User_Conversations_Arr_Rel_Insert_Input>;
  end_user_id?: Maybe<Scalars['Int']>;
  kv_store?: Maybe<Kv_Store_Arr_Rel_Insert_Input>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  utterances?: Maybe<Utterances_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Conversations_Max_Fields = {
  __typename?: 'conversations_max_fields';
  app_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  destroyed_at?: Maybe<Scalars['timestamptz']>;
  end_user_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "conversations" */
export type Conversations_Max_Order_By = {
  app_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  destroyed_at?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Conversations_Min_Fields = {
  __typename?: 'conversations_min_fields';
  app_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  destroyed_at?: Maybe<Scalars['timestamptz']>;
  end_user_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "conversations" */
export type Conversations_Min_Order_By = {
  app_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  destroyed_at?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "conversations" */
export type Conversations_Mutation_Response = {
  __typename?: 'conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversations>;
};

/** input type for inserting object relation for remote table "conversations" */
export type Conversations_Obj_Rel_Insert_Input = {
  data: Conversations_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Conversations_On_Conflict>;
};

/** on conflict condition type for table "conversations" */
export type Conversations_On_Conflict = {
  constraint: Conversations_Constraint;
  update_columns: Array<Conversations_Update_Column>;
  where?: Maybe<Conversations_Bool_Exp>;
};

/** Ordering options when selecting data from "conversations". */
export type Conversations_Order_By = {
  app?: Maybe<Apps_Order_By>;
  app_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  destroyed_at?: Maybe<Order_By>;
  end_user?: Maybe<End_Users_Order_By>;
  end_user_conversations_aggregate?: Maybe<End_User_Conversations_Aggregate_Order_By>;
  end_user_id?: Maybe<Order_By>;
  kv_store_aggregate?: Maybe<Kv_Store_Aggregate_Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
  utterances_aggregate?: Maybe<Utterances_Aggregate_Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Conversations_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "conversations" */
export enum Conversations_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DestroyedAt = 'destroyed_at',
  /** column name */
  EndUserId = 'end_user_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name'
}

/** input type for updating data in table "conversations" */
export type Conversations_Set_Input = {
  app_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  destroyed_at?: Maybe<Scalars['timestamptz']>;
  end_user_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Conversations_Stddev_Fields = {
  __typename?: 'conversations_stddev_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "conversations" */
export type Conversations_Stddev_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Conversations_Stddev_Pop_Fields = {
  __typename?: 'conversations_stddev_pop_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "conversations" */
export type Conversations_Stddev_Pop_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Conversations_Stddev_Samp_Fields = {
  __typename?: 'conversations_stddev_samp_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "conversations" */
export type Conversations_Stddev_Samp_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Conversations_Sum_Fields = {
  __typename?: 'conversations_sum_fields';
  app_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "conversations" */
export type Conversations_Sum_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** update columns of table "conversations" */
export enum Conversations_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DestroyedAt = 'destroyed_at',
  /** column name */
  EndUserId = 'end_user_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name'
}

/** aggregate var_pop on columns */
export type Conversations_Var_Pop_Fields = {
  __typename?: 'conversations_var_pop_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "conversations" */
export type Conversations_Var_Pop_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Conversations_Var_Samp_Fields = {
  __typename?: 'conversations_var_samp_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "conversations" */
export type Conversations_Var_Samp_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Conversations_Variance_Fields = {
  __typename?: 'conversations_variance_fields';
  app_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "conversations" */
export type Conversations_Variance_Order_By = {
  app_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** columns and relationships of "developers" */
export type Developers = {
  __typename?: 'developers';
  active: Scalars['Boolean'];
  api_key: Scalars['String'];
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  /** An array relationship */
  events: Array<Events>;
  /** An aggregate relationship */
  events_aggregate: Events_Aggregate;
  github_handle: Scalars['String'];
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  /** An array relationship */
  kv_stores: Array<Kv_Store>;
  /** An aggregate relationship */
  kv_stores_aggregate: Kv_Store_Aggregate;
  metadata: Scalars['jsonb'];
  name: Scalars['String'];
  object_id: Scalars['Int'];
  onboarded: Scalars['Boolean'];
  uid: Scalars['String'];
};


/** columns and relationships of "developers" */
export type DevelopersAppsArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersApps_AggregateArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersKv_StoresArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersKv_Stores_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "developers" */
export type DevelopersMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "developers" */
export type Developers_Aggregate = {
  __typename?: 'developers_aggregate';
  aggregate?: Maybe<Developers_Aggregate_Fields>;
  nodes: Array<Developers>;
};

/** aggregate fields of "developers" */
export type Developers_Aggregate_Fields = {
  __typename?: 'developers_aggregate_fields';
  avg?: Maybe<Developers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Developers_Max_Fields>;
  min?: Maybe<Developers_Min_Fields>;
  stddev?: Maybe<Developers_Stddev_Fields>;
  stddev_pop?: Maybe<Developers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Developers_Stddev_Samp_Fields>;
  sum?: Maybe<Developers_Sum_Fields>;
  var_pop?: Maybe<Developers_Var_Pop_Fields>;
  var_samp?: Maybe<Developers_Var_Samp_Fields>;
  variance?: Maybe<Developers_Variance_Fields>;
};


/** aggregate fields of "developers" */
export type Developers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Developers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Developers_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Developers_Avg_Fields = {
  __typename?: 'developers_avg_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "developers". All fields are combined with a logical 'AND'. */
export type Developers_Bool_Exp = {
  _and?: Maybe<Array<Developers_Bool_Exp>>;
  _not?: Maybe<Developers_Bool_Exp>;
  _or?: Maybe<Array<Developers_Bool_Exp>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  api_key?: Maybe<String_Comparison_Exp>;
  apps?: Maybe<Apps_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  events?: Maybe<Events_Bool_Exp>;
  github_handle?: Maybe<String_Comparison_Exp>;
  invites?: Maybe<Invites_Bool_Exp>;
  kv_stores?: Maybe<Kv_Store_Bool_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  onboarded?: Maybe<Boolean_Comparison_Exp>;
  uid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "developers" */
export enum Developers_Constraint {
  /** unique or primary key constraint */
  DevelopersApiKeyKey = 'developers_api_key_key',
  /** unique or primary key constraint */
  DevelopersEmailKey = 'developers_email_key',
  /** unique or primary key constraint */
  DevelopersGithubHandleKey = 'developers_github_handle_key',
  /** unique or primary key constraint */
  DevelopersObjectIdKey = 'developers_object_id_key',
  /** unique or primary key constraint */
  DevelopersUidKey = 'developers_uid_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Developers_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Developers_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Developers_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "developers" */
export type Developers_Inc_Input = {
  object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "developers" */
export type Developers_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  api_key?: Maybe<Scalars['String']>;
  apps?: Maybe<Apps_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  events?: Maybe<Events_Arr_Rel_Insert_Input>;
  github_handle?: Maybe<Scalars['String']>;
  invites?: Maybe<Invites_Arr_Rel_Insert_Input>;
  kv_stores?: Maybe<Kv_Store_Arr_Rel_Insert_Input>;
  metadata?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  onboarded?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Developers_Max_Fields = {
  __typename?: 'developers_max_fields';
  api_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  github_handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Developers_Min_Fields = {
  __typename?: 'developers_min_fields';
  api_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  github_handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "developers" */
export type Developers_Mutation_Response = {
  __typename?: 'developers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Developers>;
};

/** input type for inserting object relation for remote table "developers" */
export type Developers_Obj_Rel_Insert_Input = {
  data: Developers_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Developers_On_Conflict>;
};

/** on conflict condition type for table "developers" */
export type Developers_On_Conflict = {
  constraint: Developers_Constraint;
  update_columns: Array<Developers_Update_Column>;
  where?: Maybe<Developers_Bool_Exp>;
};

/** Ordering options when selecting data from "developers". */
export type Developers_Order_By = {
  active?: Maybe<Order_By>;
  api_key?: Maybe<Order_By>;
  apps_aggregate?: Maybe<Apps_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  events_aggregate?: Maybe<Events_Aggregate_Order_By>;
  github_handle?: Maybe<Order_By>;
  invites_aggregate?: Maybe<Invites_Aggregate_Order_By>;
  kv_stores_aggregate?: Maybe<Kv_Store_Aggregate_Order_By>;
  metadata?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  onboarded?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Developers_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "developers" */
export enum Developers_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GithubHandle = 'github_handle',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Onboarded = 'onboarded',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "developers" */
export type Developers_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  api_key?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  github_handle?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  name?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  onboarded?: Maybe<Scalars['Boolean']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Developers_Stddev_Fields = {
  __typename?: 'developers_stddev_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Developers_Stddev_Pop_Fields = {
  __typename?: 'developers_stddev_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Developers_Stddev_Samp_Fields = {
  __typename?: 'developers_stddev_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Developers_Sum_Fields = {
  __typename?: 'developers_sum_fields';
  object_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "developers" */
export enum Developers_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  ApiKey = 'api_key',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GithubHandle = 'github_handle',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Onboarded = 'onboarded',
  /** column name */
  Uid = 'uid'
}

/** aggregate var_pop on columns */
export type Developers_Var_Pop_Fields = {
  __typename?: 'developers_var_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Developers_Var_Samp_Fields = {
  __typename?: 'developers_var_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Developers_Variance_Fields = {
  __typename?: 'developers_variance_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "end_user_conversations" */
export type End_User_Conversations = {
  __typename?: 'end_user_conversations';
  /** An object relationship */
  conversation: Conversations;
  conversation_id: Scalars['Int'];
  /** An object relationship */
  end_user: End_Users;
  end_user_id: Scalars['Int'];
};

/** aggregated selection of "end_user_conversations" */
export type End_User_Conversations_Aggregate = {
  __typename?: 'end_user_conversations_aggregate';
  aggregate?: Maybe<End_User_Conversations_Aggregate_Fields>;
  nodes: Array<End_User_Conversations>;
};

/** aggregate fields of "end_user_conversations" */
export type End_User_Conversations_Aggregate_Fields = {
  __typename?: 'end_user_conversations_aggregate_fields';
  avg?: Maybe<End_User_Conversations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<End_User_Conversations_Max_Fields>;
  min?: Maybe<End_User_Conversations_Min_Fields>;
  stddev?: Maybe<End_User_Conversations_Stddev_Fields>;
  stddev_pop?: Maybe<End_User_Conversations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<End_User_Conversations_Stddev_Samp_Fields>;
  sum?: Maybe<End_User_Conversations_Sum_Fields>;
  var_pop?: Maybe<End_User_Conversations_Var_Pop_Fields>;
  var_samp?: Maybe<End_User_Conversations_Var_Samp_Fields>;
  variance?: Maybe<End_User_Conversations_Variance_Fields>;
};


/** aggregate fields of "end_user_conversations" */
export type End_User_Conversations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<End_User_Conversations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "end_user_conversations" */
export type End_User_Conversations_Aggregate_Order_By = {
  avg?: Maybe<End_User_Conversations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<End_User_Conversations_Max_Order_By>;
  min?: Maybe<End_User_Conversations_Min_Order_By>;
  stddev?: Maybe<End_User_Conversations_Stddev_Order_By>;
  stddev_pop?: Maybe<End_User_Conversations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<End_User_Conversations_Stddev_Samp_Order_By>;
  sum?: Maybe<End_User_Conversations_Sum_Order_By>;
  var_pop?: Maybe<End_User_Conversations_Var_Pop_Order_By>;
  var_samp?: Maybe<End_User_Conversations_Var_Samp_Order_By>;
  variance?: Maybe<End_User_Conversations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "end_user_conversations" */
export type End_User_Conversations_Arr_Rel_Insert_Input = {
  data: Array<End_User_Conversations_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<End_User_Conversations_On_Conflict>;
};

/** aggregate avg on columns */
export type End_User_Conversations_Avg_Fields = {
  __typename?: 'end_user_conversations_avg_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "end_user_conversations" */
export type End_User_Conversations_Avg_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "end_user_conversations". All fields are combined with a logical 'AND'. */
export type End_User_Conversations_Bool_Exp = {
  _and?: Maybe<Array<End_User_Conversations_Bool_Exp>>;
  _not?: Maybe<End_User_Conversations_Bool_Exp>;
  _or?: Maybe<Array<End_User_Conversations_Bool_Exp>>;
  conversation?: Maybe<Conversations_Bool_Exp>;
  conversation_id?: Maybe<Int_Comparison_Exp>;
  end_user?: Maybe<End_Users_Bool_Exp>;
  end_user_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "end_user_conversations" */
export enum End_User_Conversations_Constraint {
  /** unique or primary key constraint */
  EndUserConversationsEndUserIdKey = 'end_user_conversations_end_user_id_key',
  /** unique or primary key constraint */
  EndUserConversationsPkey = 'end_user_conversations_pkey'
}

/** input type for incrementing numeric columns in table "end_user_conversations" */
export type End_User_Conversations_Inc_Input = {
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "end_user_conversations" */
export type End_User_Conversations_Insert_Input = {
  conversation?: Maybe<Conversations_Obj_Rel_Insert_Input>;
  conversation_id?: Maybe<Scalars['Int']>;
  end_user?: Maybe<End_Users_Obj_Rel_Insert_Input>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type End_User_Conversations_Max_Fields = {
  __typename?: 'end_user_conversations_max_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "end_user_conversations" */
export type End_User_Conversations_Max_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type End_User_Conversations_Min_Fields = {
  __typename?: 'end_user_conversations_min_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "end_user_conversations" */
export type End_User_Conversations_Min_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "end_user_conversations" */
export type End_User_Conversations_Mutation_Response = {
  __typename?: 'end_user_conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<End_User_Conversations>;
};

/** input type for inserting object relation for remote table "end_user_conversations" */
export type End_User_Conversations_Obj_Rel_Insert_Input = {
  data: End_User_Conversations_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<End_User_Conversations_On_Conflict>;
};

/** on conflict condition type for table "end_user_conversations" */
export type End_User_Conversations_On_Conflict = {
  constraint: End_User_Conversations_Constraint;
  update_columns: Array<End_User_Conversations_Update_Column>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};

/** Ordering options when selecting data from "end_user_conversations". */
export type End_User_Conversations_Order_By = {
  conversation?: Maybe<Conversations_Order_By>;
  conversation_id?: Maybe<Order_By>;
  end_user?: Maybe<End_Users_Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: end_user_conversations */
export type End_User_Conversations_Pk_Columns_Input = {
  conversation_id: Scalars['Int'];
  end_user_id: Scalars['Int'];
};

/** select columns of table "end_user_conversations" */
export enum End_User_Conversations_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  EndUserId = 'end_user_id'
}

/** input type for updating data in table "end_user_conversations" */
export type End_User_Conversations_Set_Input = {
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type End_User_Conversations_Stddev_Fields = {
  __typename?: 'end_user_conversations_stddev_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "end_user_conversations" */
export type End_User_Conversations_Stddev_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type End_User_Conversations_Stddev_Pop_Fields = {
  __typename?: 'end_user_conversations_stddev_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "end_user_conversations" */
export type End_User_Conversations_Stddev_Pop_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type End_User_Conversations_Stddev_Samp_Fields = {
  __typename?: 'end_user_conversations_stddev_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "end_user_conversations" */
export type End_User_Conversations_Stddev_Samp_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type End_User_Conversations_Sum_Fields = {
  __typename?: 'end_user_conversations_sum_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "end_user_conversations" */
export type End_User_Conversations_Sum_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** update columns of table "end_user_conversations" */
export enum End_User_Conversations_Update_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  EndUserId = 'end_user_id'
}

/** aggregate var_pop on columns */
export type End_User_Conversations_Var_Pop_Fields = {
  __typename?: 'end_user_conversations_var_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "end_user_conversations" */
export type End_User_Conversations_Var_Pop_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type End_User_Conversations_Var_Samp_Fields = {
  __typename?: 'end_user_conversations_var_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "end_user_conversations" */
export type End_User_Conversations_Var_Samp_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type End_User_Conversations_Variance_Fields = {
  __typename?: 'end_user_conversations_variance_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "end_user_conversations" */
export type End_User_Conversations_Variance_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** columns and relationships of "end_users" */
export type End_Users = {
  __typename?: 'end_users';
  /** An array relationship */
  conversations: Array<Conversations>;
  /** An aggregate relationship */
  conversations_aggregate: Conversations_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  end_user_conversation?: Maybe<End_User_Conversations>;
  /** An array relationship */
  kv_store: Array<Kv_Store>;
  /** An aggregate relationship */
  kv_store_aggregate: Kv_Store_Aggregate;
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
  scope_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  utterances: Array<Utterances>;
  /** An aggregate relationship */
  utterances_aggregate: Utterances_Aggregate;
  uuid: Scalars['String'];
};


/** columns and relationships of "end_users" */
export type End_UsersConversationsArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


/** columns and relationships of "end_users" */
export type End_UsersConversations_AggregateArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


/** columns and relationships of "end_users" */
export type End_UsersKv_StoreArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "end_users" */
export type End_UsersKv_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


/** columns and relationships of "end_users" */
export type End_UsersMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "end_users" */
export type End_UsersUtterancesArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


/** columns and relationships of "end_users" */
export type End_UsersUtterances_AggregateArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};

/** aggregated selection of "end_users" */
export type End_Users_Aggregate = {
  __typename?: 'end_users_aggregate';
  aggregate?: Maybe<End_Users_Aggregate_Fields>;
  nodes: Array<End_Users>;
};

/** aggregate fields of "end_users" */
export type End_Users_Aggregate_Fields = {
  __typename?: 'end_users_aggregate_fields';
  avg?: Maybe<End_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<End_Users_Max_Fields>;
  min?: Maybe<End_Users_Min_Fields>;
  stddev?: Maybe<End_Users_Stddev_Fields>;
  stddev_pop?: Maybe<End_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<End_Users_Stddev_Samp_Fields>;
  sum?: Maybe<End_Users_Sum_Fields>;
  var_pop?: Maybe<End_Users_Var_Pop_Fields>;
  var_samp?: Maybe<End_Users_Var_Samp_Fields>;
  variance?: Maybe<End_Users_Variance_Fields>;
};


/** aggregate fields of "end_users" */
export type End_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<End_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type End_Users_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type End_Users_Avg_Fields = {
  __typename?: 'end_users_avg_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "end_users". All fields are combined with a logical 'AND'. */
export type End_Users_Bool_Exp = {
  _and?: Maybe<Array<End_Users_Bool_Exp>>;
  _not?: Maybe<End_Users_Bool_Exp>;
  _or?: Maybe<Array<End_Users_Bool_Exp>>;
  conversations?: Maybe<Conversations_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_user_conversation?: Maybe<End_User_Conversations_Bool_Exp>;
  kv_store?: Maybe<Kv_Store_Bool_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  scope_name?: Maybe<String_Comparison_Exp>;
  utterances?: Maybe<Utterances_Bool_Exp>;
  uuid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "end_users" */
export enum End_Users_Constraint {
  /** unique or primary key constraint */
  EndUsersObjectIdKey = 'end_users_object_id_key',
  /** unique or primary key constraint */
  EndUsersUuidKey = 'end_users_uuid_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type End_Users_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type End_Users_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type End_Users_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "end_users" */
export type End_Users_Inc_Input = {
  object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "end_users" */
export type End_Users_Insert_Input = {
  conversations?: Maybe<Conversations_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  end_user_conversation?: Maybe<End_User_Conversations_Obj_Rel_Insert_Input>;
  kv_store?: Maybe<Kv_Store_Arr_Rel_Insert_Input>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  utterances?: Maybe<Utterances_Arr_Rel_Insert_Input>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type End_Users_Max_Fields = {
  __typename?: 'end_users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type End_Users_Min_Fields = {
  __typename?: 'end_users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "end_users" */
export type End_Users_Mutation_Response = {
  __typename?: 'end_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<End_Users>;
};

/** input type for inserting object relation for remote table "end_users" */
export type End_Users_Obj_Rel_Insert_Input = {
  data: End_Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<End_Users_On_Conflict>;
};

/** on conflict condition type for table "end_users" */
export type End_Users_On_Conflict = {
  constraint: End_Users_Constraint;
  update_columns: Array<End_Users_Update_Column>;
  where?: Maybe<End_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "end_users". */
export type End_Users_Order_By = {
  conversations_aggregate?: Maybe<Conversations_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  end_user_conversation?: Maybe<End_User_Conversations_Order_By>;
  kv_store_aggregate?: Maybe<Kv_Store_Aggregate_Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_name?: Maybe<Order_By>;
  utterances_aggregate?: Maybe<Utterances_Aggregate_Order_By>;
  uuid?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type End_Users_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "end_users" */
export enum End_Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "end_users" */
export type End_Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type End_Users_Stddev_Fields = {
  __typename?: 'end_users_stddev_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type End_Users_Stddev_Pop_Fields = {
  __typename?: 'end_users_stddev_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type End_Users_Stddev_Samp_Fields = {
  __typename?: 'end_users_stddev_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type End_Users_Sum_Fields = {
  __typename?: 'end_users_sum_fields';
  object_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "end_users" */
export enum End_Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ScopeName = 'scope_name',
  /** column name */
  Uuid = 'uuid'
}

/** aggregate var_pop on columns */
export type End_Users_Var_Pop_Fields = {
  __typename?: 'end_users_var_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type End_Users_Var_Samp_Fields = {
  __typename?: 'end_users_var_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type End_Users_Variance_Fields = {
  __typename?: 'end_users_variance_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "events" */
export type Events = {
  __typename?: 'events';
  action?: Maybe<Scalars['String']>;
  changed_fields?: Maybe<Scalars['jsonb']>;
  developer_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "events" */
export type EventsChanged_FieldsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "events" */
export type Events_Aggregate = {
  __typename?: 'events_aggregate';
  aggregate?: Maybe<Events_Aggregate_Fields>;
  nodes: Array<Events>;
};

/** aggregate fields of "events" */
export type Events_Aggregate_Fields = {
  __typename?: 'events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Events_Max_Fields>;
  min?: Maybe<Events_Min_Fields>;
};


/** aggregate fields of "events" */
export type Events_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Events_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "events" */
export type Events_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Events_Max_Order_By>;
  min?: Maybe<Events_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Events_Append_Input = {
  changed_fields?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "events" */
export type Events_Arr_Rel_Insert_Input = {
  data: Array<Events_Insert_Input>;
};

/** Boolean expression to filter rows from the table "events". All fields are combined with a logical 'AND'. */
export type Events_Bool_Exp = {
  _and?: Maybe<Array<Events_Bool_Exp>>;
  _not?: Maybe<Events_Bool_Exp>;
  _or?: Maybe<Array<Events_Bool_Exp>>;
  action?: Maybe<String_Comparison_Exp>;
  changed_fields?: Maybe<Jsonb_Comparison_Exp>;
  developer_id?: Maybe<String_Comparison_Exp>;
  table?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Events_Delete_At_Path_Input = {
  changed_fields?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Events_Delete_Elem_Input = {
  changed_fields?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Events_Delete_Key_Input = {
  changed_fields?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "events" */
export type Events_Insert_Input = {
  action?: Maybe<Scalars['String']>;
  changed_fields?: Maybe<Scalars['jsonb']>;
  developer_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Events_Max_Fields = {
  __typename?: 'events_max_fields';
  action?: Maybe<Scalars['String']>;
  developer_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "events" */
export type Events_Max_Order_By = {
  action?: Maybe<Order_By>;
  developer_id?: Maybe<Order_By>;
  table?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Events_Min_Fields = {
  __typename?: 'events_min_fields';
  action?: Maybe<Scalars['String']>;
  developer_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "events" */
export type Events_Min_Order_By = {
  action?: Maybe<Order_By>;
  developer_id?: Maybe<Order_By>;
  table?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "events" */
export type Events_Mutation_Response = {
  __typename?: 'events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Events>;
};

/** Ordering options when selecting data from "events". */
export type Events_Order_By = {
  action?: Maybe<Order_By>;
  changed_fields?: Maybe<Order_By>;
  developer_id?: Maybe<Order_By>;
  table?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Events_Prepend_Input = {
  changed_fields?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "events" */
export enum Events_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  ChangedFields = 'changed_fields',
  /** column name */
  DeveloperId = 'developer_id',
  /** column name */
  Table = 'table',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "events" */
export type Events_Set_Input = {
  action?: Maybe<Scalars['String']>;
  changed_fields?: Maybe<Scalars['jsonb']>;
  developer_id?: Maybe<Scalars['String']>;
  table?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "history" */
export type History = {
  __typename?: 'history';
  /** An object relationship */
  conversation?: Maybe<Conversations>;
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  utterances?: Maybe<Scalars['jsonb']>;
  window?: Maybe<Scalars['tstzrange']>;
};


/** columns and relationships of "history" */
export type HistoryUtterancesArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "history" */
export type History_Aggregate = {
  __typename?: 'history_aggregate';
  aggregate?: Maybe<History_Aggregate_Fields>;
  nodes: Array<History>;
};

/** aggregate fields of "history" */
export type History_Aggregate_Fields = {
  __typename?: 'history_aggregate_fields';
  avg?: Maybe<History_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<History_Max_Fields>;
  min?: Maybe<History_Min_Fields>;
  stddev?: Maybe<History_Stddev_Fields>;
  stddev_pop?: Maybe<History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<History_Stddev_Samp_Fields>;
  sum?: Maybe<History_Sum_Fields>;
  var_pop?: Maybe<History_Var_Pop_Fields>;
  var_samp?: Maybe<History_Var_Samp_Fields>;
  variance?: Maybe<History_Variance_Fields>;
};


/** aggregate fields of "history" */
export type History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<History_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type History_Avg_Fields = {
  __typename?: 'history_avg_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "history". All fields are combined with a logical 'AND'. */
export type History_Bool_Exp = {
  _and?: Maybe<Array<History_Bool_Exp>>;
  _not?: Maybe<History_Bool_Exp>;
  _or?: Maybe<Array<History_Bool_Exp>>;
  conversation?: Maybe<Conversations_Bool_Exp>;
  conversation_id?: Maybe<Int_Comparison_Exp>;
  interval?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  utterances?: Maybe<Jsonb_Comparison_Exp>;
  window?: Maybe<Tstzrange_Comparison_Exp>;
};

/** aggregate max on columns */
export type History_Max_Fields = {
  __typename?: 'history_max_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type History_Min_Fields = {
  __typename?: 'history_min_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** Ordering options when selecting data from "history". */
export type History_Order_By = {
  conversation?: Maybe<Conversations_Order_By>;
  conversation_id?: Maybe<Order_By>;
  interval?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  utterances?: Maybe<Order_By>;
  window?: Maybe<Order_By>;
};

/** select columns of table "history" */
export enum History_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Interval = 'interval',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Utterances = 'utterances',
  /** column name */
  Window = 'window'
}

/** aggregate stddev on columns */
export type History_Stddev_Fields = {
  __typename?: 'history_stddev_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type History_Stddev_Pop_Fields = {
  __typename?: 'history_stddev_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type History_Stddev_Samp_Fields = {
  __typename?: 'history_stddev_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type History_Sum_Fields = {
  __typename?: 'history_sum_fields';
  conversation_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type History_Var_Pop_Fields = {
  __typename?: 'history_var_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type History_Var_Samp_Fields = {
  __typename?: 'history_var_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type History_Variance_Fields = {
  __typename?: 'history_variance_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "invites" */
export type Invites = {
  __typename?: 'invites';
  accepted: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  developer: Developers;
  invited_email: Scalars['String'];
  inviter_id: Scalars['Int'];
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
  resend_count: Scalars['Int'];
};


/** columns and relationships of "invites" */
export type InvitesMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "invites" */
export type Invites_Aggregate = {
  __typename?: 'invites_aggregate';
  aggregate?: Maybe<Invites_Aggregate_Fields>;
  nodes: Array<Invites>;
};

/** aggregate fields of "invites" */
export type Invites_Aggregate_Fields = {
  __typename?: 'invites_aggregate_fields';
  avg?: Maybe<Invites_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Invites_Max_Fields>;
  min?: Maybe<Invites_Min_Fields>;
  stddev?: Maybe<Invites_Stddev_Fields>;
  stddev_pop?: Maybe<Invites_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Invites_Stddev_Samp_Fields>;
  sum?: Maybe<Invites_Sum_Fields>;
  var_pop?: Maybe<Invites_Var_Pop_Fields>;
  var_samp?: Maybe<Invites_Var_Samp_Fields>;
  variance?: Maybe<Invites_Variance_Fields>;
};


/** aggregate fields of "invites" */
export type Invites_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Invites_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invites" */
export type Invites_Aggregate_Order_By = {
  avg?: Maybe<Invites_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Invites_Max_Order_By>;
  min?: Maybe<Invites_Min_Order_By>;
  stddev?: Maybe<Invites_Stddev_Order_By>;
  stddev_pop?: Maybe<Invites_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Invites_Stddev_Samp_Order_By>;
  sum?: Maybe<Invites_Sum_Order_By>;
  var_pop?: Maybe<Invites_Var_Pop_Order_By>;
  var_samp?: Maybe<Invites_Var_Samp_Order_By>;
  variance?: Maybe<Invites_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Invites_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "invites" */
export type Invites_Arr_Rel_Insert_Input = {
  data: Array<Invites_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Invites_On_Conflict>;
};

/** aggregate avg on columns */
export type Invites_Avg_Fields = {
  __typename?: 'invites_avg_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "invites" */
export type Invites_Avg_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "invites". All fields are combined with a logical 'AND'. */
export type Invites_Bool_Exp = {
  _and?: Maybe<Array<Invites_Bool_Exp>>;
  _not?: Maybe<Invites_Bool_Exp>;
  _or?: Maybe<Array<Invites_Bool_Exp>>;
  accepted?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  developer?: Maybe<Developers_Bool_Exp>;
  invited_email?: Maybe<String_Comparison_Exp>;
  inviter_id?: Maybe<Int_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  resend_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "invites" */
export enum Invites_Constraint {
  /** unique or primary key constraint */
  InvitesInviterIdInvitedEmailKey = 'invites_inviter_id_invited_email_key',
  /** unique or primary key constraint */
  InvitesObjectIdKey = 'invites_object_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Invites_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Invites_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Invites_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "invites" */
export type Invites_Inc_Input = {
  inviter_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "invites" */
export type Invites_Insert_Input = {
  accepted?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  developer?: Maybe<Developers_Obj_Rel_Insert_Input>;
  invited_email?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Invites_Max_Fields = {
  __typename?: 'invites_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  invited_email?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "invites" */
export type Invites_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  invited_email?: Maybe<Order_By>;
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Invites_Min_Fields = {
  __typename?: 'invites_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  invited_email?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "invites" */
export type Invites_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  invited_email?: Maybe<Order_By>;
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** response of any mutation on the table "invites" */
export type Invites_Mutation_Response = {
  __typename?: 'invites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invites>;
};

/** on conflict condition type for table "invites" */
export type Invites_On_Conflict = {
  constraint: Invites_Constraint;
  update_columns: Array<Invites_Update_Column>;
  where?: Maybe<Invites_Bool_Exp>;
};

/** Ordering options when selecting data from "invites". */
export type Invites_Order_By = {
  accepted?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  developer?: Maybe<Developers_Order_By>;
  invited_email?: Maybe<Order_By>;
  inviter_id?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Invites_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "invites" */
export enum Invites_Select_Column {
  /** column name */
  Accepted = 'accepted',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvitedEmail = 'invited_email',
  /** column name */
  InviterId = 'inviter_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ResendCount = 'resend_count'
}

/** input type for updating data in table "invites" */
export type Invites_Set_Input = {
  accepted?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  invited_email?: Maybe<Scalars['String']>;
  inviter_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Invites_Stddev_Fields = {
  __typename?: 'invites_stddev_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "invites" */
export type Invites_Stddev_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Invites_Stddev_Pop_Fields = {
  __typename?: 'invites_stddev_pop_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "invites" */
export type Invites_Stddev_Pop_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Invites_Stddev_Samp_Fields = {
  __typename?: 'invites_stddev_samp_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "invites" */
export type Invites_Stddev_Samp_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Invites_Sum_Fields = {
  __typename?: 'invites_sum_fields';
  inviter_id?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  resend_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "invites" */
export type Invites_Sum_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** update columns of table "invites" */
export enum Invites_Update_Column {
  /** column name */
  Accepted = 'accepted',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  InvitedEmail = 'invited_email',
  /** column name */
  InviterId = 'inviter_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  ResendCount = 'resend_count'
}

/** aggregate var_pop on columns */
export type Invites_Var_Pop_Fields = {
  __typename?: 'invites_var_pop_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "invites" */
export type Invites_Var_Pop_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Invites_Var_Samp_Fields = {
  __typename?: 'invites_var_samp_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "invites" */
export type Invites_Var_Samp_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Invites_Variance_Fields = {
  __typename?: 'invites_variance_fields';
  inviter_id?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  resend_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "invites" */
export type Invites_Variance_Order_By = {
  inviter_id?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  resend_count?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "kv_scope_enum" */
export type Kv_Scope_Enum = {
  __typename?: 'kv_scope_enum';
  value: Scalars['String'];
};

/** aggregated selection of "kv_scope_enum" */
export type Kv_Scope_Enum_Aggregate = {
  __typename?: 'kv_scope_enum_aggregate';
  aggregate?: Maybe<Kv_Scope_Enum_Aggregate_Fields>;
  nodes: Array<Kv_Scope_Enum>;
};

/** aggregate fields of "kv_scope_enum" */
export type Kv_Scope_Enum_Aggregate_Fields = {
  __typename?: 'kv_scope_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Kv_Scope_Enum_Max_Fields>;
  min?: Maybe<Kv_Scope_Enum_Min_Fields>;
};


/** aggregate fields of "kv_scope_enum" */
export type Kv_Scope_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kv_Scope_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "kv_scope_enum". All fields are combined with a logical 'AND'. */
export type Kv_Scope_Enum_Bool_Exp = {
  _and?: Maybe<Array<Kv_Scope_Enum_Bool_Exp>>;
  _not?: Maybe<Kv_Scope_Enum_Bool_Exp>;
  _or?: Maybe<Array<Kv_Scope_Enum_Bool_Exp>>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kv_scope_enum" */
export enum Kv_Scope_Enum_Constraint {
  /** unique or primary key constraint */
  KvScopeEnumPkey = 'kv_scope_enum_pkey'
}

/** input type for inserting data into table "kv_scope_enum" */
export type Kv_Scope_Enum_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kv_Scope_Enum_Max_Fields = {
  __typename?: 'kv_scope_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kv_Scope_Enum_Min_Fields = {
  __typename?: 'kv_scope_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kv_scope_enum" */
export type Kv_Scope_Enum_Mutation_Response = {
  __typename?: 'kv_scope_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kv_Scope_Enum>;
};

/** on conflict condition type for table "kv_scope_enum" */
export type Kv_Scope_Enum_On_Conflict = {
  constraint: Kv_Scope_Enum_Constraint;
  update_columns: Array<Kv_Scope_Enum_Update_Column>;
  where?: Maybe<Kv_Scope_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "kv_scope_enum". */
export type Kv_Scope_Enum_Order_By = {
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: kv_scope_enum */
export type Kv_Scope_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "kv_scope_enum" */
export enum Kv_Scope_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "kv_scope_enum" */
export type Kv_Scope_Enum_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "kv_scope_enum" */
export enum Kv_Scope_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "kv_store" */
export type Kv_Store = {
  __typename?: 'kv_store';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  /** An object relationship */
  developer: Developers;
  key: Scalars['String'];
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
  scope: Scalars['String'];
  scope_object_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['jsonb'];
};


/** columns and relationships of "kv_store" */
export type Kv_StoreMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "kv_store" */
export type Kv_StoreValueArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "kv_store" */
export type Kv_Store_Aggregate = {
  __typename?: 'kv_store_aggregate';
  aggregate?: Maybe<Kv_Store_Aggregate_Fields>;
  nodes: Array<Kv_Store>;
};

/** aggregate fields of "kv_store" */
export type Kv_Store_Aggregate_Fields = {
  __typename?: 'kv_store_aggregate_fields';
  avg?: Maybe<Kv_Store_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kv_Store_Max_Fields>;
  min?: Maybe<Kv_Store_Min_Fields>;
  stddev?: Maybe<Kv_Store_Stddev_Fields>;
  stddev_pop?: Maybe<Kv_Store_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kv_Store_Stddev_Samp_Fields>;
  sum?: Maybe<Kv_Store_Sum_Fields>;
  var_pop?: Maybe<Kv_Store_Var_Pop_Fields>;
  var_samp?: Maybe<Kv_Store_Var_Samp_Fields>;
  variance?: Maybe<Kv_Store_Variance_Fields>;
};


/** aggregate fields of "kv_store" */
export type Kv_Store_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Kv_Store_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kv_store" */
export type Kv_Store_Aggregate_Order_By = {
  avg?: Maybe<Kv_Store_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Kv_Store_Max_Order_By>;
  min?: Maybe<Kv_Store_Min_Order_By>;
  stddev?: Maybe<Kv_Store_Stddev_Order_By>;
  stddev_pop?: Maybe<Kv_Store_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Kv_Store_Stddev_Samp_Order_By>;
  sum?: Maybe<Kv_Store_Sum_Order_By>;
  var_pop?: Maybe<Kv_Store_Var_Pop_Order_By>;
  var_samp?: Maybe<Kv_Store_Var_Samp_Order_By>;
  variance?: Maybe<Kv_Store_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Kv_Store_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "kv_store" */
export type Kv_Store_Arr_Rel_Insert_Input = {
  data: Array<Kv_Store_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Kv_Store_On_Conflict>;
};

/** aggregate avg on columns */
export type Kv_Store_Avg_Fields = {
  __typename?: 'kv_store_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kv_store" */
export type Kv_Store_Avg_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kv_store". All fields are combined with a logical 'AND'. */
export type Kv_Store_Bool_Exp = {
  _and?: Maybe<Array<Kv_Store_Bool_Exp>>;
  _not?: Maybe<Kv_Store_Bool_Exp>;
  _or?: Maybe<Array<Kv_Store_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<Int_Comparison_Exp>;
  developer?: Maybe<Developers_Bool_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
  scope?: Maybe<String_Comparison_Exp>;
  scope_object_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "kv_store" */
export enum Kv_Store_Constraint {
  /** unique or primary key constraint */
  KvStoreKeyKey = 'kv_store_key_key',
  /** unique or primary key constraint */
  KvStoreObjectIdKey = 'kv_store_object_id_key',
  /** unique or primary key constraint */
  KvStorePkey = 'kv_store_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Kv_Store_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
  value?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Kv_Store_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Kv_Store_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "kv_store" */
export type Kv_Store_Inc_Input = {
  created_by?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "kv_store" */
export type Kv_Store_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  developer?: Maybe<Developers_Obj_Rel_Insert_Input>;
  key?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  scope_object_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Kv_Store_Max_Fields = {
  __typename?: 'kv_store_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  scope_object_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "kv_store" */
export type Kv_Store_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Kv_Store_Min_Fields = {
  __typename?: 'kv_store_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  object_id?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  scope_object_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "kv_store" */
export type Kv_Store_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "kv_store" */
export type Kv_Store_Mutation_Response = {
  __typename?: 'kv_store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kv_Store>;
};

/** on conflict condition type for table "kv_store" */
export type Kv_Store_On_Conflict = {
  constraint: Kv_Store_Constraint;
  update_columns: Array<Kv_Store_Update_Column>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};

/** Ordering options when selecting data from "kv_store". */
export type Kv_Store_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  developer?: Maybe<Developers_Order_By>;
  key?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: kv_store */
export type Kv_Store_Pk_Columns_Input = {
  key: Scalars['String'];
  scope: Scalars['String'];
  scope_object_id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Kv_Store_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "kv_store" */
export enum Kv_Store_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Key = 'key',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Scope = 'scope',
  /** column name */
  ScopeObjectId = 'scope_object_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "kv_store" */
export type Kv_Store_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
  scope?: Maybe<Scalars['String']>;
  scope_object_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Kv_Store_Stddev_Fields = {
  __typename?: 'kv_store_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kv_store" */
export type Kv_Store_Stddev_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kv_Store_Stddev_Pop_Fields = {
  __typename?: 'kv_store_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kv_store" */
export type Kv_Store_Stddev_Pop_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kv_Store_Stddev_Samp_Fields = {
  __typename?: 'kv_store_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kv_store" */
export type Kv_Store_Stddev_Samp_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Kv_Store_Sum_Fields = {
  __typename?: 'kv_store_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  object_id?: Maybe<Scalars['Int']>;
  scope_object_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "kv_store" */
export type Kv_Store_Sum_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** update columns of table "kv_store" */
export enum Kv_Store_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Key = 'key',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id',
  /** column name */
  Scope = 'scope',
  /** column name */
  ScopeObjectId = 'scope_object_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** aggregate var_pop on columns */
export type Kv_Store_Var_Pop_Fields = {
  __typename?: 'kv_store_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kv_store" */
export type Kv_Store_Var_Pop_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kv_Store_Var_Samp_Fields = {
  __typename?: 'kv_store_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kv_store" */
export type Kv_Store_Var_Samp_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Kv_Store_Variance_Fields = {
  __typename?: 'kv_store_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  object_id?: Maybe<Scalars['Float']>;
  scope_object_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kv_store" */
export type Kv_Store_Variance_Order_By = {
  created_by?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
  scope_object_id?: Maybe<Order_By>;
};

/** columns and relationships of "last_utterance" */
export type Last_Utterance = {
  __typename?: 'last_utterance';
  /** An object relationship */
  conversation?: Maybe<Conversations>;
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  speaker_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** aggregated selection of "last_utterance" */
export type Last_Utterance_Aggregate = {
  __typename?: 'last_utterance_aggregate';
  aggregate?: Maybe<Last_Utterance_Aggregate_Fields>;
  nodes: Array<Last_Utterance>;
};

/** aggregate fields of "last_utterance" */
export type Last_Utterance_Aggregate_Fields = {
  __typename?: 'last_utterance_aggregate_fields';
  avg?: Maybe<Last_Utterance_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Last_Utterance_Max_Fields>;
  min?: Maybe<Last_Utterance_Min_Fields>;
  stddev?: Maybe<Last_Utterance_Stddev_Fields>;
  stddev_pop?: Maybe<Last_Utterance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Last_Utterance_Stddev_Samp_Fields>;
  sum?: Maybe<Last_Utterance_Sum_Fields>;
  var_pop?: Maybe<Last_Utterance_Var_Pop_Fields>;
  var_samp?: Maybe<Last_Utterance_Var_Samp_Fields>;
  variance?: Maybe<Last_Utterance_Variance_Fields>;
};


/** aggregate fields of "last_utterance" */
export type Last_Utterance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Last_Utterance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Last_Utterance_Avg_Fields = {
  __typename?: 'last_utterance_avg_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "last_utterance". All fields are combined with a logical 'AND'. */
export type Last_Utterance_Bool_Exp = {
  _and?: Maybe<Array<Last_Utterance_Bool_Exp>>;
  _not?: Maybe<Last_Utterance_Bool_Exp>;
  _or?: Maybe<Array<Last_Utterance_Bool_Exp>>;
  conversation?: Maybe<Conversations_Bool_Exp>;
  conversation_id?: Maybe<Int_Comparison_Exp>;
  interval?: Maybe<Timestamptz_Comparison_Exp>;
  speaker_type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  utterance?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Last_Utterance_Max_Fields = {
  __typename?: 'last_utterance_max_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  speaker_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Last_Utterance_Min_Fields = {
  __typename?: 'last_utterance_min_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  interval?: Maybe<Scalars['timestamptz']>;
  speaker_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "last_utterance". */
export type Last_Utterance_Order_By = {
  conversation?: Maybe<Conversations_Order_By>;
  conversation_id?: Maybe<Order_By>;
  interval?: Maybe<Order_By>;
  speaker_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  utterance?: Maybe<Order_By>;
};

/** select columns of table "last_utterance" */
export enum Last_Utterance_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  Interval = 'interval',
  /** column name */
  SpeakerType = 'speaker_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Utterance = 'utterance'
}

/** aggregate stddev on columns */
export type Last_Utterance_Stddev_Fields = {
  __typename?: 'last_utterance_stddev_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Last_Utterance_Stddev_Pop_Fields = {
  __typename?: 'last_utterance_stddev_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Last_Utterance_Stddev_Samp_Fields = {
  __typename?: 'last_utterance_stddev_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Last_Utterance_Sum_Fields = {
  __typename?: 'last_utterance_sum_fields';
  conversation_id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Last_Utterance_Var_Pop_Fields = {
  __typename?: 'last_utterance_var_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Last_Utterance_Var_Samp_Fields = {
  __typename?: 'last_utterance_var_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Last_Utterance_Variance_Fields = {
  __typename?: 'last_utterance_variance_fields';
  conversation_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "apps" */
  delete_apps?: Maybe<Apps_Mutation_Response>;
  /** delete data from the table: "atomic.data" */
  delete_atomic_data?: Maybe<Atomic_Data_Mutation_Response>;
  /** delete data from the table: "conceptnet.data" */
  delete_conceptnet_data?: Maybe<Conceptnet_Data_Mutation_Response>;
  /** delete data from the table: "conversations" */
  delete_conversations?: Maybe<Conversations_Mutation_Response>;
  /** delete data from the table: "developers" */
  delete_developers?: Maybe<Developers_Mutation_Response>;
  /** delete data from the table: "end_user_conversations" */
  delete_end_user_conversations?: Maybe<End_User_Conversations_Mutation_Response>;
  /** delete single row from the table: "end_user_conversations" */
  delete_end_user_conversations_by_pk?: Maybe<End_User_Conversations>;
  /** delete data from the table: "end_users" */
  delete_end_users?: Maybe<End_Users_Mutation_Response>;
  /** delete data from the table: "events" */
  delete_events?: Maybe<Events_Mutation_Response>;
  /** delete data from the table: "invites" */
  delete_invites?: Maybe<Invites_Mutation_Response>;
  /** delete data from the table: "kv_scope_enum" */
  delete_kv_scope_enum?: Maybe<Kv_Scope_Enum_Mutation_Response>;
  /** delete single row from the table: "kv_scope_enum" */
  delete_kv_scope_enum_by_pk?: Maybe<Kv_Scope_Enum>;
  /** delete data from the table: "kv_store" */
  delete_kv_store?: Maybe<Kv_Store_Mutation_Response>;
  /** delete single row from the table: "kv_store" */
  delete_kv_store_by_pk?: Maybe<Kv_Store>;
  /** delete data from the table: "objects" */
  delete_objects?: Maybe<Objects_Mutation_Response>;
  /** delete single row from the table: "objects" */
  delete_objects_by_pk?: Maybe<Objects>;
  /** delete data from the table: "speaker_type_enum" */
  delete_speaker_type_enum?: Maybe<Speaker_Type_Enum_Mutation_Response>;
  /** delete single row from the table: "speaker_type_enum" */
  delete_speaker_type_enum_by_pk?: Maybe<Speaker_Type_Enum>;
  /** delete data from the table: "utterances" */
  delete_utterances?: Maybe<Utterances_Mutation_Response>;
  /** insert data into the table: "apps" */
  insert_apps?: Maybe<Apps_Mutation_Response>;
  /** insert a single row into the table: "apps" */
  insert_apps_one?: Maybe<Apps>;
  /** insert data into the table: "atomic.data" */
  insert_atomic_data?: Maybe<Atomic_Data_Mutation_Response>;
  /** insert a single row into the table: "atomic.data" */
  insert_atomic_data_one?: Maybe<Atomic_Data>;
  /** insert data into the table: "conceptnet.data" */
  insert_conceptnet_data?: Maybe<Conceptnet_Data_Mutation_Response>;
  /** insert a single row into the table: "conceptnet.data" */
  insert_conceptnet_data_one?: Maybe<Conceptnet_Data>;
  /** insert data into the table: "conversations" */
  insert_conversations?: Maybe<Conversations_Mutation_Response>;
  /** insert a single row into the table: "conversations" */
  insert_conversations_one?: Maybe<Conversations>;
  /** insert data into the table: "developers" */
  insert_developers?: Maybe<Developers_Mutation_Response>;
  /** insert a single row into the table: "developers" */
  insert_developers_one?: Maybe<Developers>;
  /** insert data into the table: "end_user_conversations" */
  insert_end_user_conversations?: Maybe<End_User_Conversations_Mutation_Response>;
  /** insert a single row into the table: "end_user_conversations" */
  insert_end_user_conversations_one?: Maybe<End_User_Conversations>;
  /** insert data into the table: "end_users" */
  insert_end_users?: Maybe<End_Users_Mutation_Response>;
  /** insert a single row into the table: "end_users" */
  insert_end_users_one?: Maybe<End_Users>;
  /** insert data into the table: "events" */
  insert_events?: Maybe<Events_Mutation_Response>;
  /** insert a single row into the table: "events" */
  insert_events_one?: Maybe<Events>;
  /** insert data into the table: "invites" */
  insert_invites?: Maybe<Invites_Mutation_Response>;
  /** insert a single row into the table: "invites" */
  insert_invites_one?: Maybe<Invites>;
  /** insert data into the table: "kv_scope_enum" */
  insert_kv_scope_enum?: Maybe<Kv_Scope_Enum_Mutation_Response>;
  /** insert a single row into the table: "kv_scope_enum" */
  insert_kv_scope_enum_one?: Maybe<Kv_Scope_Enum>;
  /** insert data into the table: "kv_store" */
  insert_kv_store?: Maybe<Kv_Store_Mutation_Response>;
  /** insert a single row into the table: "kv_store" */
  insert_kv_store_one?: Maybe<Kv_Store>;
  /** insert data into the table: "objects" */
  insert_objects?: Maybe<Objects_Mutation_Response>;
  /** insert a single row into the table: "objects" */
  insert_objects_one?: Maybe<Objects>;
  /** insert data into the table: "speaker_type_enum" */
  insert_speaker_type_enum?: Maybe<Speaker_Type_Enum_Mutation_Response>;
  /** insert a single row into the table: "speaker_type_enum" */
  insert_speaker_type_enum_one?: Maybe<Speaker_Type_Enum>;
  /** insert data into the table: "utterances" */
  insert_utterances?: Maybe<Utterances_Mutation_Response>;
  /** insert a single row into the table: "utterances" */
  insert_utterances_one?: Maybe<Utterances>;
  /** update data of the table: "apps" */
  update_apps?: Maybe<Apps_Mutation_Response>;
  /** update data of the table: "atomic.data" */
  update_atomic_data?: Maybe<Atomic_Data_Mutation_Response>;
  /** update data of the table: "conceptnet.data" */
  update_conceptnet_data?: Maybe<Conceptnet_Data_Mutation_Response>;
  /** update data of the table: "conversations" */
  update_conversations?: Maybe<Conversations_Mutation_Response>;
  /** update data of the table: "developers" */
  update_developers?: Maybe<Developers_Mutation_Response>;
  /** update data of the table: "end_user_conversations" */
  update_end_user_conversations?: Maybe<End_User_Conversations_Mutation_Response>;
  /** update single row of the table: "end_user_conversations" */
  update_end_user_conversations_by_pk?: Maybe<End_User_Conversations>;
  /** update data of the table: "end_users" */
  update_end_users?: Maybe<End_Users_Mutation_Response>;
  /** update data of the table: "events" */
  update_events?: Maybe<Events_Mutation_Response>;
  /** update data of the table: "invites" */
  update_invites?: Maybe<Invites_Mutation_Response>;
  /** update data of the table: "kv_scope_enum" */
  update_kv_scope_enum?: Maybe<Kv_Scope_Enum_Mutation_Response>;
  /** update single row of the table: "kv_scope_enum" */
  update_kv_scope_enum_by_pk?: Maybe<Kv_Scope_Enum>;
  /** update data of the table: "kv_store" */
  update_kv_store?: Maybe<Kv_Store_Mutation_Response>;
  /** update single row of the table: "kv_store" */
  update_kv_store_by_pk?: Maybe<Kv_Store>;
  /** update data of the table: "objects" */
  update_objects?: Maybe<Objects_Mutation_Response>;
  /** update single row of the table: "objects" */
  update_objects_by_pk?: Maybe<Objects>;
  /** update data of the table: "speaker_type_enum" */
  update_speaker_type_enum?: Maybe<Speaker_Type_Enum_Mutation_Response>;
  /** update single row of the table: "speaker_type_enum" */
  update_speaker_type_enum_by_pk?: Maybe<Speaker_Type_Enum>;
  /** update data of the table: "utterances" */
  update_utterances?: Maybe<Utterances_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_AppsArgs = {
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Atomic_DataArgs = {
  where: Atomic_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conceptnet_DataArgs = {
  where: Conceptnet_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ConversationsArgs = {
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_DevelopersArgs = {
  where: Developers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_End_User_ConversationsArgs = {
  where: End_User_Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_End_User_Conversations_By_PkArgs = {
  conversation_id: Scalars['Int'];
  end_user_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_End_UsersArgs = {
  where: End_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_EventsArgs = {
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_InvitesArgs = {
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kv_Scope_EnumArgs = {
  where: Kv_Scope_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kv_Scope_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Kv_StoreArgs = {
  where: Kv_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kv_Store_By_PkArgs = {
  key: Scalars['String'];
  scope: Scalars['String'];
  scope_object_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ObjectsArgs = {
  where: Objects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Objects_By_PkArgs = {
  object_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Speaker_Type_EnumArgs = {
  where: Speaker_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Speaker_Type_Enum_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UtterancesArgs = {
  where: Utterances_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_AppsArgs = {
  objects: Array<Apps_Insert_Input>;
  on_conflict?: Maybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Apps_OneArgs = {
  object: Apps_Insert_Input;
  on_conflict?: Maybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Atomic_DataArgs = {
  objects: Array<Atomic_Data_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Atomic_Data_OneArgs = {
  object: Atomic_Data_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Conceptnet_DataArgs = {
  objects: Array<Conceptnet_Data_Insert_Input>;
  on_conflict?: Maybe<Conceptnet_Data_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conceptnet_Data_OneArgs = {
  object: Conceptnet_Data_Insert_Input;
  on_conflict?: Maybe<Conceptnet_Data_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConversationsArgs = {
  objects: Array<Conversations_Insert_Input>;
  on_conflict?: Maybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversations_OneArgs = {
  object: Conversations_Insert_Input;
  on_conflict?: Maybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DevelopersArgs = {
  objects: Array<Developers_Insert_Input>;
  on_conflict?: Maybe<Developers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Developers_OneArgs = {
  object: Developers_Insert_Input;
  on_conflict?: Maybe<Developers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_End_User_ConversationsArgs = {
  objects: Array<End_User_Conversations_Insert_Input>;
  on_conflict?: Maybe<End_User_Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_End_User_Conversations_OneArgs = {
  object: End_User_Conversations_Insert_Input;
  on_conflict?: Maybe<End_User_Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_End_UsersArgs = {
  objects: Array<End_Users_Insert_Input>;
  on_conflict?: Maybe<End_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_End_Users_OneArgs = {
  object: End_Users_Insert_Input;
  on_conflict?: Maybe<End_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventsArgs = {
  objects: Array<Events_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Events_OneArgs = {
  object: Events_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_InvitesArgs = {
  objects: Array<Invites_Insert_Input>;
  on_conflict?: Maybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invites_OneArgs = {
  object: Invites_Insert_Input;
  on_conflict?: Maybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kv_Scope_EnumArgs = {
  objects: Array<Kv_Scope_Enum_Insert_Input>;
  on_conflict?: Maybe<Kv_Scope_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kv_Scope_Enum_OneArgs = {
  object: Kv_Scope_Enum_Insert_Input;
  on_conflict?: Maybe<Kv_Scope_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kv_StoreArgs = {
  objects: Array<Kv_Store_Insert_Input>;
  on_conflict?: Maybe<Kv_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kv_Store_OneArgs = {
  object: Kv_Store_Insert_Input;
  on_conflict?: Maybe<Kv_Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ObjectsArgs = {
  objects: Array<Objects_Insert_Input>;
  on_conflict?: Maybe<Objects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Objects_OneArgs = {
  object: Objects_Insert_Input;
  on_conflict?: Maybe<Objects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Speaker_Type_EnumArgs = {
  objects: Array<Speaker_Type_Enum_Insert_Input>;
  on_conflict?: Maybe<Speaker_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Speaker_Type_Enum_OneArgs = {
  object: Speaker_Type_Enum_Insert_Input;
  on_conflict?: Maybe<Speaker_Type_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UtterancesArgs = {
  objects: Array<Utterances_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Utterances_OneArgs = {
  object: Utterances_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AppsArgs = {
  _append?: Maybe<Apps_Append_Input>;
  _delete_at_path?: Maybe<Apps_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Apps_Delete_Elem_Input>;
  _delete_key?: Maybe<Apps_Delete_Key_Input>;
  _inc?: Maybe<Apps_Inc_Input>;
  _prepend?: Maybe<Apps_Prepend_Input>;
  _set?: Maybe<Apps_Set_Input>;
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Atomic_DataArgs = {
  _set?: Maybe<Atomic_Data_Set_Input>;
  where: Atomic_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conceptnet_DataArgs = {
  _inc?: Maybe<Conceptnet_Data_Inc_Input>;
  _set?: Maybe<Conceptnet_Data_Set_Input>;
  where: Conceptnet_Data_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ConversationsArgs = {
  _append?: Maybe<Conversations_Append_Input>;
  _delete_at_path?: Maybe<Conversations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Conversations_Delete_Elem_Input>;
  _delete_key?: Maybe<Conversations_Delete_Key_Input>;
  _inc?: Maybe<Conversations_Inc_Input>;
  _prepend?: Maybe<Conversations_Prepend_Input>;
  _set?: Maybe<Conversations_Set_Input>;
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_DevelopersArgs = {
  _append?: Maybe<Developers_Append_Input>;
  _delete_at_path?: Maybe<Developers_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Developers_Delete_Elem_Input>;
  _delete_key?: Maybe<Developers_Delete_Key_Input>;
  _inc?: Maybe<Developers_Inc_Input>;
  _prepend?: Maybe<Developers_Prepend_Input>;
  _set?: Maybe<Developers_Set_Input>;
  where: Developers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_End_User_ConversationsArgs = {
  _inc?: Maybe<End_User_Conversations_Inc_Input>;
  _set?: Maybe<End_User_Conversations_Set_Input>;
  where: End_User_Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_End_User_Conversations_By_PkArgs = {
  _inc?: Maybe<End_User_Conversations_Inc_Input>;
  _set?: Maybe<End_User_Conversations_Set_Input>;
  pk_columns: End_User_Conversations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_End_UsersArgs = {
  _append?: Maybe<End_Users_Append_Input>;
  _delete_at_path?: Maybe<End_Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<End_Users_Delete_Elem_Input>;
  _delete_key?: Maybe<End_Users_Delete_Key_Input>;
  _inc?: Maybe<End_Users_Inc_Input>;
  _prepend?: Maybe<End_Users_Prepend_Input>;
  _set?: Maybe<End_Users_Set_Input>;
  where: End_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_EventsArgs = {
  _append?: Maybe<Events_Append_Input>;
  _delete_at_path?: Maybe<Events_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Events_Delete_Elem_Input>;
  _delete_key?: Maybe<Events_Delete_Key_Input>;
  _prepend?: Maybe<Events_Prepend_Input>;
  _set?: Maybe<Events_Set_Input>;
  where: Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_InvitesArgs = {
  _append?: Maybe<Invites_Append_Input>;
  _delete_at_path?: Maybe<Invites_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Invites_Delete_Elem_Input>;
  _delete_key?: Maybe<Invites_Delete_Key_Input>;
  _inc?: Maybe<Invites_Inc_Input>;
  _prepend?: Maybe<Invites_Prepend_Input>;
  _set?: Maybe<Invites_Set_Input>;
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kv_Scope_EnumArgs = {
  _set?: Maybe<Kv_Scope_Enum_Set_Input>;
  where: Kv_Scope_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kv_Scope_Enum_By_PkArgs = {
  _set?: Maybe<Kv_Scope_Enum_Set_Input>;
  pk_columns: Kv_Scope_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kv_StoreArgs = {
  _append?: Maybe<Kv_Store_Append_Input>;
  _delete_at_path?: Maybe<Kv_Store_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Kv_Store_Delete_Elem_Input>;
  _delete_key?: Maybe<Kv_Store_Delete_Key_Input>;
  _inc?: Maybe<Kv_Store_Inc_Input>;
  _prepend?: Maybe<Kv_Store_Prepend_Input>;
  _set?: Maybe<Kv_Store_Set_Input>;
  where: Kv_Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kv_Store_By_PkArgs = {
  _append?: Maybe<Kv_Store_Append_Input>;
  _delete_at_path?: Maybe<Kv_Store_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Kv_Store_Delete_Elem_Input>;
  _delete_key?: Maybe<Kv_Store_Delete_Key_Input>;
  _inc?: Maybe<Kv_Store_Inc_Input>;
  _prepend?: Maybe<Kv_Store_Prepend_Input>;
  _set?: Maybe<Kv_Store_Set_Input>;
  pk_columns: Kv_Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectsArgs = {
  _append?: Maybe<Objects_Append_Input>;
  _delete_at_path?: Maybe<Objects_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Objects_Delete_Elem_Input>;
  _delete_key?: Maybe<Objects_Delete_Key_Input>;
  _inc?: Maybe<Objects_Inc_Input>;
  _prepend?: Maybe<Objects_Prepend_Input>;
  _set?: Maybe<Objects_Set_Input>;
  where: Objects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Objects_By_PkArgs = {
  _append?: Maybe<Objects_Append_Input>;
  _delete_at_path?: Maybe<Objects_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Objects_Delete_Elem_Input>;
  _delete_key?: Maybe<Objects_Delete_Key_Input>;
  _inc?: Maybe<Objects_Inc_Input>;
  _prepend?: Maybe<Objects_Prepend_Input>;
  _set?: Maybe<Objects_Set_Input>;
  pk_columns: Objects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Speaker_Type_EnumArgs = {
  _set?: Maybe<Speaker_Type_Enum_Set_Input>;
  where: Speaker_Type_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Speaker_Type_Enum_By_PkArgs = {
  _set?: Maybe<Speaker_Type_Enum_Set_Input>;
  pk_columns: Speaker_Type_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UtterancesArgs = {
  _inc?: Maybe<Utterances_Inc_Input>;
  _set?: Maybe<Utterances_Set_Input>;
  where: Utterances_Bool_Exp;
};


/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "objects" */
export type Objects = {
  __typename?: 'objects';
  created_at: Scalars['timestamptz'];
  metadata: Scalars['jsonb'];
  object_id: Scalars['Int'];
};


/** columns and relationships of "objects" */
export type ObjectsMetadataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "objects" */
export type Objects_Aggregate = {
  __typename?: 'objects_aggregate';
  aggregate?: Maybe<Objects_Aggregate_Fields>;
  nodes: Array<Objects>;
};

/** aggregate fields of "objects" */
export type Objects_Aggregate_Fields = {
  __typename?: 'objects_aggregate_fields';
  avg?: Maybe<Objects_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Objects_Max_Fields>;
  min?: Maybe<Objects_Min_Fields>;
  stddev?: Maybe<Objects_Stddev_Fields>;
  stddev_pop?: Maybe<Objects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Objects_Stddev_Samp_Fields>;
  sum?: Maybe<Objects_Sum_Fields>;
  var_pop?: Maybe<Objects_Var_Pop_Fields>;
  var_samp?: Maybe<Objects_Var_Samp_Fields>;
  variance?: Maybe<Objects_Variance_Fields>;
};


/** aggregate fields of "objects" */
export type Objects_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Objects_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Objects_Append_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Objects_Avg_Fields = {
  __typename?: 'objects_avg_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "objects". All fields are combined with a logical 'AND'. */
export type Objects_Bool_Exp = {
  _and?: Maybe<Array<Objects_Bool_Exp>>;
  _not?: Maybe<Objects_Bool_Exp>;
  _or?: Maybe<Array<Objects_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  metadata?: Maybe<Jsonb_Comparison_Exp>;
  object_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "objects" */
export enum Objects_Constraint {
  /** unique or primary key constraint */
  ObjectsPkey = 'objects_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Objects_Delete_At_Path_Input = {
  metadata?: Maybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Objects_Delete_Elem_Input = {
  metadata?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Objects_Delete_Key_Input = {
  metadata?: Maybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "objects" */
export type Objects_Inc_Input = {
  object_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "objects" */
export type Objects_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Objects_Max_Fields = {
  __typename?: 'objects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Objects_Min_Fields = {
  __typename?: 'objects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "objects" */
export type Objects_Mutation_Response = {
  __typename?: 'objects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Objects>;
};

/** on conflict condition type for table "objects" */
export type Objects_On_Conflict = {
  constraint: Objects_Constraint;
  update_columns: Array<Objects_Update_Column>;
  where?: Maybe<Objects_Bool_Exp>;
};

/** Ordering options when selecting data from "objects". */
export type Objects_Order_By = {
  created_at?: Maybe<Order_By>;
  metadata?: Maybe<Order_By>;
  object_id?: Maybe<Order_By>;
};

/** primary key columns input for table: objects */
export type Objects_Pk_Columns_Input = {
  object_id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Objects_Prepend_Input = {
  metadata?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "objects" */
export enum Objects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id'
}

/** input type for updating data in table "objects" */
export type Objects_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  metadata?: Maybe<Scalars['jsonb']>;
  object_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Objects_Stddev_Fields = {
  __typename?: 'objects_stddev_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Objects_Stddev_Pop_Fields = {
  __typename?: 'objects_stddev_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Objects_Stddev_Samp_Fields = {
  __typename?: 'objects_stddev_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Objects_Sum_Fields = {
  __typename?: 'objects_sum_fields';
  object_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "objects" */
export enum Objects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ObjectId = 'object_id'
}

/** aggregate var_pop on columns */
export type Objects_Var_Pop_Fields = {
  __typename?: 'objects_var_pop_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Objects_Var_Samp_Fields = {
  __typename?: 'objects_var_samp_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Objects_Variance_Fields = {
  __typename?: 'objects_variance_fields';
  object_id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "apps" */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  apps_aggregate: Apps_Aggregate;
  /** fetch data from the table: "atomic.data" */
  atomic_data: Array<Atomic_Data>;
  /** fetch aggregated fields from the table: "atomic.data" */
  atomic_data_aggregate: Atomic_Data_Aggregate;
  callApplyVoiceCSS?: Maybe<SsmlResult>;
  callCompose?: Maybe<ComposeResult>;
  callMatchIntent?: Maybe<MatchIntentOutput>;
  callMeasureSimilarity?: Maybe<SentenceSimilarityScores>;
  callNextDialogTurn?: Maybe<Array<Maybe<DialogAlternative>>>;
  callNlpBatch?: Maybe<NlpBatch>;
  callNlpDoc?: Maybe<NlpDoc>;
  callParaphraseSentence?: Maybe<Paraphrase>;
  callParseACE?: Maybe<AceResult>;
  callParseContext?: Maybe<Array<Maybe<ContextResult>>>;
  callShowDocs?: Maybe<ServiceInfo>;
  callSpeechToText?: Maybe<Array<Maybe<SttResult>>>;
  callTextToSpeech?: Maybe<TtsResult>;
  /** fetch data from the table: "conceptnet.data" */
  conceptnet_data: Array<Conceptnet_Data>;
  /** fetch aggregated fields from the table: "conceptnet.data" */
  conceptnet_data_aggregate: Conceptnet_Data_Aggregate;
  /** execute function "conceptnet.search_relations" which returns "conceptnet.data" */
  conceptnet_search_relations: Array<Conceptnet_Data>;
  /** execute function "conceptnet.search_relations" and query aggregates on result of table type "conceptnet.data" */
  conceptnet_search_relations_aggregate: Conceptnet_Data_Aggregate;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "developers" */
  developers: Array<Developers>;
  /** fetch aggregated fields from the table: "developers" */
  developers_aggregate: Developers_Aggregate;
  /** fetch data from the table: "end_user_conversations" */
  end_user_conversations: Array<End_User_Conversations>;
  /** fetch aggregated fields from the table: "end_user_conversations" */
  end_user_conversations_aggregate: End_User_Conversations_Aggregate;
  /** fetch data from the table: "end_user_conversations" using primary key columns */
  end_user_conversations_by_pk?: Maybe<End_User_Conversations>;
  /** fetch data from the table: "end_users" */
  end_users: Array<End_Users>;
  /** fetch aggregated fields from the table: "end_users" */
  end_users_aggregate: End_Users_Aggregate;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "invites" */
  invites: Array<Invites>;
  /** fetch aggregated fields from the table: "invites" */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "kv_scope_enum" */
  kv_scope_enum: Array<Kv_Scope_Enum>;
  /** fetch aggregated fields from the table: "kv_scope_enum" */
  kv_scope_enum_aggregate: Kv_Scope_Enum_Aggregate;
  /** fetch data from the table: "kv_scope_enum" using primary key columns */
  kv_scope_enum_by_pk?: Maybe<Kv_Scope_Enum>;
  /** fetch data from the table: "kv_store" */
  kv_store: Array<Kv_Store>;
  /** fetch aggregated fields from the table: "kv_store" */
  kv_store_aggregate: Kv_Store_Aggregate;
  /** fetch data from the table: "kv_store" using primary key columns */
  kv_store_by_pk?: Maybe<Kv_Store>;
  /** fetch data from the table: "last_utterance" */
  last_utterance: Array<Last_Utterance>;
  /** fetch aggregated fields from the table: "last_utterance" */
  last_utterance_aggregate: Last_Utterance_Aggregate;
  /** fetch data from the table: "objects" */
  objects: Array<Objects>;
  /** fetch aggregated fields from the table: "objects" */
  objects_aggregate: Objects_Aggregate;
  /** fetch data from the table: "objects" using primary key columns */
  objects_by_pk?: Maybe<Objects>;
  /** fetch data from the table: "speaker_type_enum" */
  speaker_type_enum: Array<Speaker_Type_Enum>;
  /** fetch aggregated fields from the table: "speaker_type_enum" */
  speaker_type_enum_aggregate: Speaker_Type_Enum_Aggregate;
  /** fetch data from the table: "speaker_type_enum" using primary key columns */
  speaker_type_enum_by_pk?: Maybe<Speaker_Type_Enum>;
  /** fetch data from the table: "utterances" */
  utterances: Array<Utterances>;
  /** fetch aggregated fields from the table: "utterances" */
  utterances_aggregate: Utterances_Aggregate;
};


export type Query_RootAppsArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


export type Query_RootApps_AggregateArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


export type Query_RootAtomic_DataArgs = {
  distinct_on?: Maybe<Array<Atomic_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Atomic_Data_Order_By>>;
  where?: Maybe<Atomic_Data_Bool_Exp>;
};


export type Query_RootAtomic_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Atomic_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Atomic_Data_Order_By>>;
  where?: Maybe<Atomic_Data_Bool_Exp>;
};


export type Query_RootCallApplyVoiceCssArgs = {
  styled_ssml?: Maybe<Scalars['String']>;
  voice_css?: Maybe<Scalars['String']>;
};


export type Query_RootCallComposeArgs = {
  init?: Maybe<Scalars['JSON']>;
  pipeline: Array<Maybe<InputPipe>>;
};


export type Query_RootCallMatchIntentArgs = {
  input?: Maybe<Scalars['String']>;
  possible_intents?: Maybe<Array<Maybe<Scalars['String']>>>;
  similarity_threshold?: Maybe<Scalars['Float']>;
};


export type Query_RootCallMeasureSimilarityArgs = {
  compareWith?: Maybe<Array<Maybe<Scalars['String']>>>;
  sentence?: Maybe<Scalars['String']>;
};


export type Query_RootCallNextDialogTurnArgs = {
  alternatives?: Maybe<Array<Maybe<Scalars['String']>>>;
  history?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Query_RootCallNlpBatchArgs = {
  batch_id?: Maybe<Scalars['String']>;
  batch_size?: Maybe<Scalars['Int']>;
  disable?: Maybe<Array<Maybe<Scalars['String']>>>;
  model?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['Int']>;
  texts?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Query_RootCallNlpDocArgs = {
  disable?: Maybe<Array<Maybe<Scalars['String']>>>;
  model?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};


export type Query_RootCallParaphraseSentenceArgs = {
  input?: Maybe<Scalars['String']>;
  number_of_paraphrases?: Maybe<Scalars['Int']>;
};


export type Query_RootCallParseAceArgs = {
  format?: Maybe<AceOutputType>;
  guess?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};


export type Query_RootCallParseContextArgs = {
  turns?: Maybe<Array<Maybe<ContextObject>>>;
};


export type Query_RootCallShowDocsArgs = {
  service?: Maybe<ServiceName>;
};


export type Query_RootCallSpeechToTextArgs = {
  audioB64: Scalars['String'];
  config?: Maybe<SttConfig>;
};


export type Query_RootCallTextToSpeechArgs = {
  config?: Maybe<TtsConfig>;
  text: Scalars['String'];
};


export type Query_RootConceptnet_DataArgs = {
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Query_RootConceptnet_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Query_RootConceptnet_Search_RelationsArgs = {
  args: Conceptnet_Search_Relations_Args;
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Query_RootConceptnet_Search_Relations_AggregateArgs = {
  args: Conceptnet_Search_Relations_Args;
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Query_RootConversationsArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


export type Query_RootConversations_AggregateArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


export type Query_RootDevelopersArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};


export type Query_RootDevelopers_AggregateArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};


export type Query_RootEnd_User_ConversationsArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


export type Query_RootEnd_User_Conversations_AggregateArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


export type Query_RootEnd_User_Conversations_By_PkArgs = {
  conversation_id: Scalars['Int'];
  end_user_id: Scalars['Int'];
};


export type Query_RootEnd_UsersArgs = {
  distinct_on?: Maybe<Array<End_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_Users_Order_By>>;
  where?: Maybe<End_Users_Bool_Exp>;
};


export type Query_RootEnd_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<End_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_Users_Order_By>>;
  where?: Maybe<End_Users_Bool_Exp>;
};


export type Query_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Query_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Query_RootHistoryArgs = {
  distinct_on?: Maybe<Array<History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<History_Order_By>>;
  where?: Maybe<History_Bool_Exp>;
};


export type Query_RootHistory_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<History_Order_By>>;
  where?: Maybe<History_Bool_Exp>;
};


export type Query_RootInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


export type Query_RootInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


export type Query_RootKv_Scope_EnumArgs = {
  distinct_on?: Maybe<Array<Kv_Scope_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Scope_Enum_Order_By>>;
  where?: Maybe<Kv_Scope_Enum_Bool_Exp>;
};


export type Query_RootKv_Scope_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Scope_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Scope_Enum_Order_By>>;
  where?: Maybe<Kv_Scope_Enum_Bool_Exp>;
};


export type Query_RootKv_Scope_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootKv_StoreArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


export type Query_RootKv_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


export type Query_RootKv_Store_By_PkArgs = {
  key: Scalars['String'];
  scope: Scalars['String'];
  scope_object_id: Scalars['Int'];
};


export type Query_RootLast_UtteranceArgs = {
  distinct_on?: Maybe<Array<Last_Utterance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Last_Utterance_Order_By>>;
  where?: Maybe<Last_Utterance_Bool_Exp>;
};


export type Query_RootLast_Utterance_AggregateArgs = {
  distinct_on?: Maybe<Array<Last_Utterance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Last_Utterance_Order_By>>;
  where?: Maybe<Last_Utterance_Bool_Exp>;
};


export type Query_RootObjectsArgs = {
  distinct_on?: Maybe<Array<Objects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objects_Order_By>>;
  where?: Maybe<Objects_Bool_Exp>;
};


export type Query_RootObjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Objects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objects_Order_By>>;
  where?: Maybe<Objects_Bool_Exp>;
};


export type Query_RootObjects_By_PkArgs = {
  object_id: Scalars['Int'];
};


export type Query_RootSpeaker_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Speaker_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Type_Enum_Order_By>>;
  where?: Maybe<Speaker_Type_Enum_Bool_Exp>;
};


export type Query_RootSpeaker_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Speaker_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Type_Enum_Order_By>>;
  where?: Maybe<Speaker_Type_Enum_Bool_Exp>;
};


export type Query_RootSpeaker_Type_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootUtterancesArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


export type Query_RootUtterances_AggregateArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};

/** columns and relationships of "speaker_type_enum" */
export type Speaker_Type_Enum = {
  __typename?: 'speaker_type_enum';
  /** An array relationship */
  utterances: Array<Utterances>;
  /** An aggregate relationship */
  utterances_aggregate: Utterances_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "speaker_type_enum" */
export type Speaker_Type_EnumUtterancesArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


/** columns and relationships of "speaker_type_enum" */
export type Speaker_Type_EnumUtterances_AggregateArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};

/** aggregated selection of "speaker_type_enum" */
export type Speaker_Type_Enum_Aggregate = {
  __typename?: 'speaker_type_enum_aggregate';
  aggregate?: Maybe<Speaker_Type_Enum_Aggregate_Fields>;
  nodes: Array<Speaker_Type_Enum>;
};

/** aggregate fields of "speaker_type_enum" */
export type Speaker_Type_Enum_Aggregate_Fields = {
  __typename?: 'speaker_type_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Speaker_Type_Enum_Max_Fields>;
  min?: Maybe<Speaker_Type_Enum_Min_Fields>;
};


/** aggregate fields of "speaker_type_enum" */
export type Speaker_Type_Enum_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Speaker_Type_Enum_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "speaker_type_enum". All fields are combined with a logical 'AND'. */
export type Speaker_Type_Enum_Bool_Exp = {
  _and?: Maybe<Array<Speaker_Type_Enum_Bool_Exp>>;
  _not?: Maybe<Speaker_Type_Enum_Bool_Exp>;
  _or?: Maybe<Array<Speaker_Type_Enum_Bool_Exp>>;
  utterances?: Maybe<Utterances_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "speaker_type_enum" */
export enum Speaker_Type_Enum_Constraint {
  /** unique or primary key constraint */
  SpeakerTypeEnumPkey = 'speaker_type_enum_pkey'
}

export enum Speaker_Type_Enum_Enum {
  Bot = 'bot',
  User = 'user'
}

/** Boolean expression to compare columns of type "speaker_type_enum_enum". All fields are combined with logical 'AND'. */
export type Speaker_Type_Enum_Enum_Comparison_Exp = {
  _eq?: Maybe<Speaker_Type_Enum_Enum>;
  _in?: Maybe<Array<Speaker_Type_Enum_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Speaker_Type_Enum_Enum>;
  _nin?: Maybe<Array<Speaker_Type_Enum_Enum>>;
};

/** input type for inserting data into table "speaker_type_enum" */
export type Speaker_Type_Enum_Insert_Input = {
  utterances?: Maybe<Utterances_Arr_Rel_Insert_Input>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Speaker_Type_Enum_Max_Fields = {
  __typename?: 'speaker_type_enum_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Speaker_Type_Enum_Min_Fields = {
  __typename?: 'speaker_type_enum_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "speaker_type_enum" */
export type Speaker_Type_Enum_Mutation_Response = {
  __typename?: 'speaker_type_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Speaker_Type_Enum>;
};

/** input type for inserting object relation for remote table "speaker_type_enum" */
export type Speaker_Type_Enum_Obj_Rel_Insert_Input = {
  data: Speaker_Type_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Speaker_Type_Enum_On_Conflict>;
};

/** on conflict condition type for table "speaker_type_enum" */
export type Speaker_Type_Enum_On_Conflict = {
  constraint: Speaker_Type_Enum_Constraint;
  update_columns: Array<Speaker_Type_Enum_Update_Column>;
  where?: Maybe<Speaker_Type_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "speaker_type_enum". */
export type Speaker_Type_Enum_Order_By = {
  utterances_aggregate?: Maybe<Utterances_Aggregate_Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: speaker_type_enum */
export type Speaker_Type_Enum_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "speaker_type_enum" */
export enum Speaker_Type_Enum_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "speaker_type_enum" */
export type Speaker_Type_Enum_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "speaker_type_enum" */
export enum Speaker_Type_Enum_Update_Column {
  /** column name */
  Value = 'value'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "apps" */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  apps_aggregate: Apps_Aggregate;
  /** fetch data from the table: "atomic.data" */
  atomic_data: Array<Atomic_Data>;
  /** fetch aggregated fields from the table: "atomic.data" */
  atomic_data_aggregate: Atomic_Data_Aggregate;
  /** fetch data from the table: "conceptnet.data" */
  conceptnet_data: Array<Conceptnet_Data>;
  /** fetch aggregated fields from the table: "conceptnet.data" */
  conceptnet_data_aggregate: Conceptnet_Data_Aggregate;
  /** execute function "conceptnet.search_relations" which returns "conceptnet.data" */
  conceptnet_search_relations: Array<Conceptnet_Data>;
  /** execute function "conceptnet.search_relations" and query aggregates on result of table type "conceptnet.data" */
  conceptnet_search_relations_aggregate: Conceptnet_Data_Aggregate;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "developers" */
  developers: Array<Developers>;
  /** fetch aggregated fields from the table: "developers" */
  developers_aggregate: Developers_Aggregate;
  /** fetch data from the table: "end_user_conversations" */
  end_user_conversations: Array<End_User_Conversations>;
  /** fetch aggregated fields from the table: "end_user_conversations" */
  end_user_conversations_aggregate: End_User_Conversations_Aggregate;
  /** fetch data from the table: "end_user_conversations" using primary key columns */
  end_user_conversations_by_pk?: Maybe<End_User_Conversations>;
  /** fetch data from the table: "end_users" */
  end_users: Array<End_Users>;
  /** fetch aggregated fields from the table: "end_users" */
  end_users_aggregate: End_Users_Aggregate;
  /** fetch data from the table: "events" */
  events: Array<Events>;
  /** fetch aggregated fields from the table: "events" */
  events_aggregate: Events_Aggregate;
  /** fetch data from the table: "history" */
  history: Array<History>;
  /** fetch aggregated fields from the table: "history" */
  history_aggregate: History_Aggregate;
  /** fetch data from the table: "invites" */
  invites: Array<Invites>;
  /** fetch aggregated fields from the table: "invites" */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "kv_scope_enum" */
  kv_scope_enum: Array<Kv_Scope_Enum>;
  /** fetch aggregated fields from the table: "kv_scope_enum" */
  kv_scope_enum_aggregate: Kv_Scope_Enum_Aggregate;
  /** fetch data from the table: "kv_scope_enum" using primary key columns */
  kv_scope_enum_by_pk?: Maybe<Kv_Scope_Enum>;
  /** fetch data from the table: "kv_store" */
  kv_store: Array<Kv_Store>;
  /** fetch aggregated fields from the table: "kv_store" */
  kv_store_aggregate: Kv_Store_Aggregate;
  /** fetch data from the table: "kv_store" using primary key columns */
  kv_store_by_pk?: Maybe<Kv_Store>;
  /** fetch data from the table: "last_utterance" */
  last_utterance: Array<Last_Utterance>;
  /** fetch aggregated fields from the table: "last_utterance" */
  last_utterance_aggregate: Last_Utterance_Aggregate;
  /** fetch data from the table: "objects" */
  objects: Array<Objects>;
  /** fetch aggregated fields from the table: "objects" */
  objects_aggregate: Objects_Aggregate;
  /** fetch data from the table: "objects" using primary key columns */
  objects_by_pk?: Maybe<Objects>;
  /** fetch data from the table: "speaker_type_enum" */
  speaker_type_enum: Array<Speaker_Type_Enum>;
  /** fetch aggregated fields from the table: "speaker_type_enum" */
  speaker_type_enum_aggregate: Speaker_Type_Enum_Aggregate;
  /** fetch data from the table: "speaker_type_enum" using primary key columns */
  speaker_type_enum_by_pk?: Maybe<Speaker_Type_Enum>;
  /** fetch data from the table: "utterances" */
  utterances: Array<Utterances>;
  /** fetch aggregated fields from the table: "utterances" */
  utterances_aggregate: Utterances_Aggregate;
};


export type Subscription_RootAppsArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


export type Subscription_RootApps_AggregateArgs = {
  distinct_on?: Maybe<Array<Apps_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Apps_Order_By>>;
  where?: Maybe<Apps_Bool_Exp>;
};


export type Subscription_RootAtomic_DataArgs = {
  distinct_on?: Maybe<Array<Atomic_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Atomic_Data_Order_By>>;
  where?: Maybe<Atomic_Data_Bool_Exp>;
};


export type Subscription_RootAtomic_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Atomic_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Atomic_Data_Order_By>>;
  where?: Maybe<Atomic_Data_Bool_Exp>;
};


export type Subscription_RootConceptnet_DataArgs = {
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Subscription_RootConceptnet_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Subscription_RootConceptnet_Search_RelationsArgs = {
  args: Conceptnet_Search_Relations_Args;
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Subscription_RootConceptnet_Search_Relations_AggregateArgs = {
  args: Conceptnet_Search_Relations_Args;
  distinct_on?: Maybe<Array<Conceptnet_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conceptnet_Data_Order_By>>;
  where?: Maybe<Conceptnet_Data_Bool_Exp>;
};


export type Subscription_RootConversationsArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


export type Subscription_RootConversations_AggregateArgs = {
  distinct_on?: Maybe<Array<Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Conversations_Order_By>>;
  where?: Maybe<Conversations_Bool_Exp>;
};


export type Subscription_RootDevelopersArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};


export type Subscription_RootDevelopers_AggregateArgs = {
  distinct_on?: Maybe<Array<Developers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Developers_Order_By>>;
  where?: Maybe<Developers_Bool_Exp>;
};


export type Subscription_RootEnd_User_ConversationsArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


export type Subscription_RootEnd_User_Conversations_AggregateArgs = {
  distinct_on?: Maybe<Array<End_User_Conversations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_User_Conversations_Order_By>>;
  where?: Maybe<End_User_Conversations_Bool_Exp>;
};


export type Subscription_RootEnd_User_Conversations_By_PkArgs = {
  conversation_id: Scalars['Int'];
  end_user_id: Scalars['Int'];
};


export type Subscription_RootEnd_UsersArgs = {
  distinct_on?: Maybe<Array<End_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_Users_Order_By>>;
  where?: Maybe<End_Users_Bool_Exp>;
};


export type Subscription_RootEnd_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<End_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<End_Users_Order_By>>;
  where?: Maybe<End_Users_Bool_Exp>;
};


export type Subscription_RootEventsArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Subscription_RootEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Events_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Events_Order_By>>;
  where?: Maybe<Events_Bool_Exp>;
};


export type Subscription_RootHistoryArgs = {
  distinct_on?: Maybe<Array<History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<History_Order_By>>;
  where?: Maybe<History_Bool_Exp>;
};


export type Subscription_RootHistory_AggregateArgs = {
  distinct_on?: Maybe<Array<History_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<History_Order_By>>;
  where?: Maybe<History_Bool_Exp>;
};


export type Subscription_RootInvitesArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_AggregateArgs = {
  distinct_on?: Maybe<Array<Invites_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Invites_Order_By>>;
  where?: Maybe<Invites_Bool_Exp>;
};


export type Subscription_RootKv_Scope_EnumArgs = {
  distinct_on?: Maybe<Array<Kv_Scope_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Scope_Enum_Order_By>>;
  where?: Maybe<Kv_Scope_Enum_Bool_Exp>;
};


export type Subscription_RootKv_Scope_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Scope_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Scope_Enum_Order_By>>;
  where?: Maybe<Kv_Scope_Enum_Bool_Exp>;
};


export type Subscription_RootKv_Scope_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootKv_StoreArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


export type Subscription_RootKv_Store_AggregateArgs = {
  distinct_on?: Maybe<Array<Kv_Store_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Kv_Store_Order_By>>;
  where?: Maybe<Kv_Store_Bool_Exp>;
};


export type Subscription_RootKv_Store_By_PkArgs = {
  key: Scalars['String'];
  scope: Scalars['String'];
  scope_object_id: Scalars['Int'];
};


export type Subscription_RootLast_UtteranceArgs = {
  distinct_on?: Maybe<Array<Last_Utterance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Last_Utterance_Order_By>>;
  where?: Maybe<Last_Utterance_Bool_Exp>;
};


export type Subscription_RootLast_Utterance_AggregateArgs = {
  distinct_on?: Maybe<Array<Last_Utterance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Last_Utterance_Order_By>>;
  where?: Maybe<Last_Utterance_Bool_Exp>;
};


export type Subscription_RootObjectsArgs = {
  distinct_on?: Maybe<Array<Objects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objects_Order_By>>;
  where?: Maybe<Objects_Bool_Exp>;
};


export type Subscription_RootObjects_AggregateArgs = {
  distinct_on?: Maybe<Array<Objects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objects_Order_By>>;
  where?: Maybe<Objects_Bool_Exp>;
};


export type Subscription_RootObjects_By_PkArgs = {
  object_id: Scalars['Int'];
};


export type Subscription_RootSpeaker_Type_EnumArgs = {
  distinct_on?: Maybe<Array<Speaker_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Type_Enum_Order_By>>;
  where?: Maybe<Speaker_Type_Enum_Bool_Exp>;
};


export type Subscription_RootSpeaker_Type_Enum_AggregateArgs = {
  distinct_on?: Maybe<Array<Speaker_Type_Enum_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Speaker_Type_Enum_Order_By>>;
  where?: Maybe<Speaker_Type_Enum_Bool_Exp>;
};


export type Subscription_RootSpeaker_Type_Enum_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootUtterancesArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


export type Subscription_RootUtterances_AggregateArgs = {
  distinct_on?: Maybe<Array<Utterances_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Utterances_Order_By>>;
  where?: Maybe<Utterances_Bool_Exp>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "tstzrange". All fields are combined with logical 'AND'. */
export type Tstzrange_Comparison_Exp = {
  _eq?: Maybe<Scalars['tstzrange']>;
  _gt?: Maybe<Scalars['tstzrange']>;
  _gte?: Maybe<Scalars['tstzrange']>;
  _in?: Maybe<Array<Scalars['tstzrange']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['tstzrange']>;
  _lte?: Maybe<Scalars['tstzrange']>;
  _neq?: Maybe<Scalars['tstzrange']>;
  _nin?: Maybe<Array<Scalars['tstzrange']>>;
};

/** columns and relationships of "utterances" */
export type Utterances = {
  __typename?: 'utterances';
  /** An object relationship */
  conversation: Conversations;
  conversation_id: Scalars['Int'];
  /** An object relationship */
  end_user: End_Users;
  end_user_id?: Maybe<Scalars['Int']>;
  normalized_utterance: Scalars['String'];
  speaker_type: Speaker_Type_Enum_Enum;
  /** An object relationship */
  speaker_type_enum: Speaker_Type_Enum;
  timestamp: Scalars['timestamptz'];
  utterance: Scalars['String'];
};

/** aggregated selection of "utterances" */
export type Utterances_Aggregate = {
  __typename?: 'utterances_aggregate';
  aggregate?: Maybe<Utterances_Aggregate_Fields>;
  nodes: Array<Utterances>;
};

/** aggregate fields of "utterances" */
export type Utterances_Aggregate_Fields = {
  __typename?: 'utterances_aggregate_fields';
  avg?: Maybe<Utterances_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Utterances_Max_Fields>;
  min?: Maybe<Utterances_Min_Fields>;
  stddev?: Maybe<Utterances_Stddev_Fields>;
  stddev_pop?: Maybe<Utterances_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Utterances_Stddev_Samp_Fields>;
  sum?: Maybe<Utterances_Sum_Fields>;
  var_pop?: Maybe<Utterances_Var_Pop_Fields>;
  var_samp?: Maybe<Utterances_Var_Samp_Fields>;
  variance?: Maybe<Utterances_Variance_Fields>;
};


/** aggregate fields of "utterances" */
export type Utterances_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Utterances_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "utterances" */
export type Utterances_Aggregate_Order_By = {
  avg?: Maybe<Utterances_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Utterances_Max_Order_By>;
  min?: Maybe<Utterances_Min_Order_By>;
  stddev?: Maybe<Utterances_Stddev_Order_By>;
  stddev_pop?: Maybe<Utterances_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Utterances_Stddev_Samp_Order_By>;
  sum?: Maybe<Utterances_Sum_Order_By>;
  var_pop?: Maybe<Utterances_Var_Pop_Order_By>;
  var_samp?: Maybe<Utterances_Var_Samp_Order_By>;
  variance?: Maybe<Utterances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "utterances" */
export type Utterances_Arr_Rel_Insert_Input = {
  data: Array<Utterances_Insert_Input>;
};

/** aggregate avg on columns */
export type Utterances_Avg_Fields = {
  __typename?: 'utterances_avg_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "utterances" */
export type Utterances_Avg_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "utterances". All fields are combined with a logical 'AND'. */
export type Utterances_Bool_Exp = {
  _and?: Maybe<Array<Utterances_Bool_Exp>>;
  _not?: Maybe<Utterances_Bool_Exp>;
  _or?: Maybe<Array<Utterances_Bool_Exp>>;
  conversation?: Maybe<Conversations_Bool_Exp>;
  conversation_id?: Maybe<Int_Comparison_Exp>;
  end_user?: Maybe<End_Users_Bool_Exp>;
  end_user_id?: Maybe<Int_Comparison_Exp>;
  normalized_utterance?: Maybe<String_Comparison_Exp>;
  speaker_type?: Maybe<Speaker_Type_Enum_Enum_Comparison_Exp>;
  speaker_type_enum?: Maybe<Speaker_Type_Enum_Bool_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
  utterance?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "utterances" */
export type Utterances_Inc_Input = {
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "utterances" */
export type Utterances_Insert_Input = {
  conversation?: Maybe<Conversations_Obj_Rel_Insert_Input>;
  conversation_id?: Maybe<Scalars['Int']>;
  end_user?: Maybe<End_Users_Obj_Rel_Insert_Input>;
  end_user_id?: Maybe<Scalars['Int']>;
  normalized_utterance?: Maybe<Scalars['String']>;
  speaker_type?: Maybe<Speaker_Type_Enum_Enum>;
  speaker_type_enum?: Maybe<Speaker_Type_Enum_Obj_Rel_Insert_Input>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Utterances_Max_Fields = {
  __typename?: 'utterances_max_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
  normalized_utterance?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "utterances" */
export type Utterances_Max_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  normalized_utterance?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  utterance?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Utterances_Min_Fields = {
  __typename?: 'utterances_min_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
  normalized_utterance?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "utterances" */
export type Utterances_Min_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
  normalized_utterance?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  utterance?: Maybe<Order_By>;
};

/** response of any mutation on the table "utterances" */
export type Utterances_Mutation_Response = {
  __typename?: 'utterances_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Utterances>;
};

/** Ordering options when selecting data from "utterances". */
export type Utterances_Order_By = {
  conversation?: Maybe<Conversations_Order_By>;
  conversation_id?: Maybe<Order_By>;
  end_user?: Maybe<End_Users_Order_By>;
  end_user_id?: Maybe<Order_By>;
  normalized_utterance?: Maybe<Order_By>;
  speaker_type?: Maybe<Order_By>;
  speaker_type_enum?: Maybe<Speaker_Type_Enum_Order_By>;
  timestamp?: Maybe<Order_By>;
  utterance?: Maybe<Order_By>;
};

/** select columns of table "utterances" */
export enum Utterances_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  EndUserId = 'end_user_id',
  /** column name */
  NormalizedUtterance = 'normalized_utterance',
  /** column name */
  SpeakerType = 'speaker_type',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Utterance = 'utterance'
}

/** input type for updating data in table "utterances" */
export type Utterances_Set_Input = {
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
  normalized_utterance?: Maybe<Scalars['String']>;
  speaker_type?: Maybe<Speaker_Type_Enum_Enum>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  utterance?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Utterances_Stddev_Fields = {
  __typename?: 'utterances_stddev_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "utterances" */
export type Utterances_Stddev_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Utterances_Stddev_Pop_Fields = {
  __typename?: 'utterances_stddev_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "utterances" */
export type Utterances_Stddev_Pop_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Utterances_Stddev_Samp_Fields = {
  __typename?: 'utterances_stddev_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "utterances" */
export type Utterances_Stddev_Samp_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Utterances_Sum_Fields = {
  __typename?: 'utterances_sum_fields';
  conversation_id?: Maybe<Scalars['Int']>;
  end_user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "utterances" */
export type Utterances_Sum_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Utterances_Var_Pop_Fields = {
  __typename?: 'utterances_var_pop_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "utterances" */
export type Utterances_Var_Pop_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Utterances_Var_Samp_Fields = {
  __typename?: 'utterances_var_samp_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "utterances" */
export type Utterances_Var_Samp_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Utterances_Variance_Fields = {
  __typename?: 'utterances_variance_fields';
  conversation_id?: Maybe<Scalars['Float']>;
  end_user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "utterances" */
export type Utterances_Variance_Order_By = {
  conversation_id?: Maybe<Order_By>;
  end_user_id?: Maybe<Order_By>;
};

export type ParseContextQueryVariables = Exact<{
  turns: Array<ContextObject> | ContextObject;
}>;


export type ParseContextQuery = (
  { __typename?: 'query_root' }
  & { callParseContext?: Maybe<Array<Maybe<(
    { __typename?: 'ContextResult' }
    & { context?: Maybe<(
      { __typename?: 'SlingDocument' }
      & { mentions?: Maybe<Array<Maybe<(
        { __typename?: 'SlingMention' }
        & Pick<SlingMention, 'evokes' | 'phrase'>
      )>>> }
    )> }
  )>>> }
);

export type ParseAceQueryVariables = Exact<{
  text: Scalars['String'];
  format?: Maybe<AceOutputType>;
}>;


export type ParseAceQuery = (
  { __typename?: 'query_root' }
  & { callParseACE?: Maybe<(
    { __typename?: 'ACEResult' }
    & Pick<AceResult, 'result'>
  )> }
);

export type ParaphraseSentenceQueryVariables = Exact<{
  sentence: Scalars['String'];
  count?: Scalars['Int'];
}>;


export type ParaphraseSentenceQuery = (
  { __typename?: 'query_root' }
  & { callParaphraseSentence?: Maybe<(
    { __typename?: 'Paraphrase' }
    & Pick<Paraphrase, 'paraphrases'>
  )> }
);

export type PredictNextTurnQueryVariables = Exact<{
  history: Array<Scalars['String']> | Scalars['String'];
  alternatives: Array<Scalars['String']> | Scalars['String'];
}>;


export type PredictNextTurnQuery = (
  { __typename?: 'query_root' }
  & { callNextDialogTurn?: Maybe<Array<Maybe<(
    { __typename?: 'DialogAlternative' }
    & Pick<DialogAlternative, 'confidence'>
    & { nextTurn: DialogAlternative['alternative'] }
  )>>> }
);

export type MatchIntentQueryVariables = Exact<{
  input: Scalars['String'];
  intenst: Array<Scalars['String']> | Scalars['String'];
  threshold?: Scalars['Float'];
}>;


export type MatchIntentQuery = (
  { __typename?: 'query_root' }
  & { callMatchIntent?: Maybe<(
    { __typename?: 'MatchIntentOutput' }
    & { matches?: Maybe<Array<Maybe<(
      { __typename?: 'PhraseMatch' }
      & { intent: PhraseMatch['matched_intent'], confidence: PhraseMatch['similarity'] }
      & { slots?: Maybe<Array<Maybe<(
        { __typename?: 'WordMatch' }
        & Pick<WordMatch, 'slot' | 'match_type'>
        & { value: WordMatch['extracted_word'], confidence: WordMatch['similarity'] }
      )>>> }
    )>>> }
  )> }
);

export type MeasureSimilarityQueryVariables = Exact<{
  sentence: Scalars['String'];
  compareWith: Array<Scalars['String']> | Scalars['String'];
}>;


export type MeasureSimilarityQuery = (
  { __typename?: 'query_root' }
  & { callMeasureSimilarity?: Maybe<(
    { __typename?: 'SentenceSimilarityScores' }
    & { result?: Maybe<Array<Maybe<(
      { __typename?: 'PairSimilarity' }
      & Pick<PairSimilarity, 'score' | 'sentencePair'>
    )>>> }
  )> }
);

export type ResolveCoreferencesQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ResolveCoreferencesQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & { coref?: Maybe<(
      { __typename?: 'DocExtension' }
      & { detected: DocExtension['has_coref'], resolved: DocExtension['coref_resolved'] }
      & { scores?: Maybe<Array<Maybe<(
        { __typename?: 'CorefScores' }
        & { candidates?: Maybe<Array<Maybe<(
          { __typename?: 'Scores' }
          & Pick<Scores, 'mention' | 'score'>
        )>>> }
      )>>> }
    )> }
  )> }
);

export type ToVecQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ToVecQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & Pick<NlpDoc, 'has_vector' | 'vector' | 'vector_norm'>
    & { sentences?: Maybe<Array<Maybe<(
      { __typename?: 'Span' }
      & Pick<Span, 'has_vector' | 'vector_norm' | 'vector' | 'text'>
    )>>>, entities?: Maybe<Array<Maybe<(
      { __typename?: 'Span' }
      & Pick<Span, 'text' | 'has_vector' | 'vector_norm' | 'vector'>
    )>>> }
  )> }
);

export type GetSentimentQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type GetSentimentQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & Pick<NlpDoc, 'sentiment'>
    & { sentences?: Maybe<Array<Maybe<(
      { __typename?: 'Span' }
      & Pick<Span, 'text' | 'sentiment'>
    )>>> }
  )> }
);

export type ParseTextQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseTextQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & { categories?: Maybe<Array<Maybe<(
      { __typename?: 'Cat' }
      & Pick<Cat, 'label' | 'score'>
    )>>>, entities?: Maybe<Array<Maybe<(
      { __typename?: 'Span' }
      & Pick<Span, 'label' | 'lemma' | 'text'>
    )>>>, sentences?: Maybe<Array<Maybe<(
      { __typename?: 'Span' }
      & Pick<Span, 'text' | 'label' | 'lemma'>
    )>>> }
  )> }
);

export type ExtractNumericDataQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ExtractNumericDataQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & { tokens?: Maybe<Array<Maybe<(
      { __typename?: 'Token' }
      & { numeric_analysis?: Maybe<(
        { __typename?: 'TokenExtension' }
        & { data: TokenExtension['nfh_head'], has_numeric: TokenExtension['is_nfh'] }
      )> }
    )>>> }
  )> }
);

export type ParseTextTokensQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type ParseTextTokensQuery = (
  { __typename?: 'query_root' }
  & { callNlpDoc?: Maybe<(
    { __typename?: 'NlpDoc' }
    & { tokens?: Maybe<Array<Maybe<(
      { __typename?: 'Token' }
      & Pick<Token, 'is_alpha' | 'is_currency' | 'is_digit' | 'is_oov' | 'is_sent_start' | 'is_stop' | 'is_title' | 'lemma' | 'like_email' | 'like_num' | 'like_url' | 'prob' | 'tag' | 'text'>
      & { dependency: Token['dep'], entity_type: Token['ent_type'], part_of_speech: Token['pos'] }
    )>>> }
  )> }
);

export type RenderCssQueryVariables = Exact<{
  ssml: Scalars['String'];
  css?: Maybe<Scalars['String']>;
}>;


export type RenderCssQuery = (
  { __typename?: 'query_root' }
  & { callCompose?: Maybe<(
    { __typename?: 'ComposeResult' }
    & Pick<ComposeResult, 'result'>
  )> }
);

export type SpeechToTextQueryVariables = Exact<{
  audio: Scalars['String'];
}>;


export type SpeechToTextQuery = (
  { __typename?: 'query_root' }
  & { callSpeechToText?: Maybe<Array<Maybe<(
    { __typename?: 'STTResult' }
    & { transcript?: Maybe<Array<Maybe<(
      { __typename?: 'TextAlternative' }
      & { text: TextAlternative['transcript'] }
    )>>> }
  )>>> }
);

export type TextToSpeechQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type TextToSpeechQuery = (
  { __typename?: 'query_root' }
  & { callTextToSpeech?: Maybe<(
    { __typename?: 'TTSResult' }
    & { audio: TtsResult['audioB64'] }
  )> }
);

// Generated on 2021-02-28T05:19:45+00:00
