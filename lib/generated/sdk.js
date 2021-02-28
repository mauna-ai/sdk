"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureSimilarityDocument = exports.MatchIntentDocument = exports.PredictNextTurnDocument = exports.ParaphraseSentenceDocument = exports.ParseAceDocument = exports.ParseContextDocument = exports.Utterances_Select_Column = exports.Speaker_Type_Enum_Update_Column = exports.Speaker_Type_Enum_Select_Column = exports.Speaker_Type_Enum_Enum = exports.Speaker_Type_Enum_Constraint = exports.Order_By = exports.Objects_Update_Column = exports.Objects_Select_Column = exports.Objects_Constraint = exports.Last_Utterance_Select_Column = exports.Kv_Store_Update_Column = exports.Kv_Store_Select_Column = exports.Kv_Store_Constraint = exports.Kv_Scope_Enum_Update_Column = exports.Kv_Scope_Enum_Select_Column = exports.Kv_Scope_Enum_Constraint = exports.Invites_Update_Column = exports.Invites_Select_Column = exports.Invites_Constraint = exports.History_Select_Column = exports.Events_Select_Column = exports.End_Users_Update_Column = exports.End_Users_Select_Column = exports.End_Users_Constraint = exports.End_User_Conversations_Update_Column = exports.End_User_Conversations_Select_Column = exports.End_User_Conversations_Constraint = exports.Developers_Update_Column = exports.Developers_Select_Column = exports.Developers_Constraint = exports.Conversations_Update_Column = exports.Conversations_Select_Column = exports.Conversations_Constraint = exports.Conceptnet_Data_Update_Column = exports.Conceptnet_Data_Select_Column = exports.Conceptnet_Data_Constraint = exports.Atomic_Data_Select_Column = exports.Apps_Update_Column = exports.Apps_Select_Column = exports.Apps_Constraint = exports.ServiceName = exports.Encoding = exports.AudioEncoding = exports.AceOutputType = void 0;
exports.getSdk = exports.TextToSpeechDocument = exports.SpeechToTextDocument = exports.RenderCssDocument = exports.ParseTextTokensDocument = exports.ExtractNumericDataDocument = exports.ParseTextDocument = exports.GetSentimentDocument = exports.ToVecDocument = exports.ResolveCoreferencesDocument = void 0;
var graphql_1 = require("graphql");
var gqlLodash_1 = require("../utils/gqlLodash");
var AceOutputType;
(function (AceOutputType) {
    AceOutputType["Drs"] = "drs";
    AceOutputType["Drshtml"] = "drshtml";
    AceOutputType["Drspp"] = "drspp";
    AceOutputType["Drsxml"] = "drsxml";
    AceOutputType["Fol"] = "fol";
    AceOutputType["Owlfss"] = "owlfss";
    AceOutputType["Owlfsspp"] = "owlfsspp";
    AceOutputType["Owlrdf"] = "owlrdf";
    AceOutputType["Owlxml"] = "owlxml";
    AceOutputType["Paraphrase"] = "paraphrase";
    AceOutputType["Paraphrase1"] = "paraphrase1";
    AceOutputType["Paraphrase2"] = "paraphrase2";
    AceOutputType["Pnf"] = "pnf";
    AceOutputType["Ruleml"] = "ruleml";
    AceOutputType["Syntax"] = "syntax";
    AceOutputType["Syntaxd"] = "syntaxd";
    AceOutputType["Syntaxdpp"] = "syntaxdpp";
    AceOutputType["Syntaxpp"] = "syntaxpp";
    AceOutputType["Tokens"] = "tokens";
    AceOutputType["Tptp"] = "tptp";
})(AceOutputType = exports.AceOutputType || (exports.AceOutputType = {}));
var AudioEncoding;
(function (AudioEncoding) {
    AudioEncoding["AudioEncodingUnspecified"] = "AUDIO_ENCODING_UNSPECIFIED";
    AudioEncoding["Linear16"] = "LINEAR16";
    AudioEncoding["Mp3"] = "MP3";
    AudioEncoding["OggOpus"] = "OGG_OPUS";
})(AudioEncoding = exports.AudioEncoding || (exports.AudioEncoding = {}));
var Encoding;
(function (Encoding) {
    Encoding["Amr"] = "AMR";
    Encoding["AmrWb"] = "AMR_WB";
    Encoding["EncodingUnspecified"] = "ENCODING_UNSPECIFIED";
    Encoding["Flac"] = "FLAC";
    Encoding["Linear16"] = "LINEAR16";
    Encoding["Mp3"] = "MP3";
    Encoding["Mulaw"] = "MULAW";
    Encoding["OggOpus"] = "OGG_OPUS";
    Encoding["SpeexWithHeaderByte"] = "SPEEX_WITH_HEADER_BYTE";
})(Encoding = exports.Encoding || (exports.Encoding = {}));
var ServiceName;
(function (ServiceName) {
    ServiceName["AceParser"] = "ace_parser";
    ServiceName["ComposeServices"] = "compose_services";
    ServiceName["ContextFrameParser"] = "context_frame_parser";
    ServiceName["IntentMatcher"] = "intent_matcher";
    ServiceName["NluService"] = "nlu_service";
    ServiceName["ParaphraseSentences"] = "paraphrase_sentences";
    ServiceName["SpeechToText"] = "speech_to_text";
    ServiceName["TextToSpeech"] = "text_to_speech";
    ServiceName["TurnPrediction"] = "turn_prediction";
    ServiceName["VoiceCssRender"] = "voice_css_render";
})(ServiceName = exports.ServiceName || (exports.ServiceName = {}));
/** unique or primary key constraints on table "apps" */
var Apps_Constraint;
(function (Apps_Constraint) {
    /** unique or primary key constraint */
    Apps_Constraint["AppsObjectIdKey"] = "apps_object_id_key";
    /** unique or primary key constraint */
    Apps_Constraint["AppsSlugKey"] = "apps_slug_key";
})(Apps_Constraint = exports.Apps_Constraint || (exports.Apps_Constraint = {}));
/** select columns of table "apps" */
var Apps_Select_Column;
(function (Apps_Select_Column) {
    /** column name */
    Apps_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Apps_Select_Column["DeveloperId"] = "developer_id";
    /** column name */
    Apps_Select_Column["Metadata"] = "metadata";
    /** column name */
    Apps_Select_Column["ObjectId"] = "object_id";
    /** column name */
    Apps_Select_Column["ScopeName"] = "scope_name";
    /** column name */
    Apps_Select_Column["Slug"] = "slug";
    /** column name */
    Apps_Select_Column["Status"] = "status";
})(Apps_Select_Column = exports.Apps_Select_Column || (exports.Apps_Select_Column = {}));
/** update columns of table "apps" */
var Apps_Update_Column;
(function (Apps_Update_Column) {
    /** column name */
    Apps_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Apps_Update_Column["DeveloperId"] = "developer_id";
    /** column name */
    Apps_Update_Column["Metadata"] = "metadata";
    /** column name */
    Apps_Update_Column["ObjectId"] = "object_id";
    /** column name */
    Apps_Update_Column["ScopeName"] = "scope_name";
    /** column name */
    Apps_Update_Column["Slug"] = "slug";
    /** column name */
    Apps_Update_Column["Status"] = "status";
})(Apps_Update_Column = exports.Apps_Update_Column || (exports.Apps_Update_Column = {}));
/** select columns of table "atomic.data" */
var Atomic_Data_Select_Column;
(function (Atomic_Data_Select_Column) {
    /** column name */
    Atomic_Data_Select_Column["Event"] = "event";
    /** column name */
    Atomic_Data_Select_Column["OEffect"] = "o_effect";
    /** column name */
    Atomic_Data_Select_Column["OReact"] = "o_react";
    /** column name */
    Atomic_Data_Select_Column["OWant"] = "o_want";
    /** column name */
    Atomic_Data_Select_Column["Prefix"] = "prefix";
    /** column name */
    Atomic_Data_Select_Column["XAttr"] = "x_attr";
    /** column name */
    Atomic_Data_Select_Column["XEffect"] = "x_effect";
    /** column name */
    Atomic_Data_Select_Column["XIntent"] = "x_intent";
    /** column name */
    Atomic_Data_Select_Column["XNeed"] = "x_need";
    /** column name */
    Atomic_Data_Select_Column["XReact"] = "x_react";
    /** column name */
    Atomic_Data_Select_Column["XWant"] = "x_want";
})(Atomic_Data_Select_Column = exports.Atomic_Data_Select_Column || (exports.Atomic_Data_Select_Column = {}));
/** unique or primary key constraints on table "conceptnet.data" */
var Conceptnet_Data_Constraint;
(function (Conceptnet_Data_Constraint) {
    /** unique or primary key constraint */
    Conceptnet_Data_Constraint["DataStartRelationEndKey"] = "data_start_relation_end_key";
    /** unique or primary key constraint */
    Conceptnet_Data_Constraint["DataUriKey"] = "data_uri_key";
})(Conceptnet_Data_Constraint = exports.Conceptnet_Data_Constraint || (exports.Conceptnet_Data_Constraint = {}));
/** select columns of table "conceptnet.data" */
var Conceptnet_Data_Select_Column;
(function (Conceptnet_Data_Select_Column) {
    /** column name */
    Conceptnet_Data_Select_Column["End"] = "end";
    /** column name */
    Conceptnet_Data_Select_Column["Relation"] = "relation";
    /** column name */
    Conceptnet_Data_Select_Column["Start"] = "start";
    /** column name */
    Conceptnet_Data_Select_Column["Uri"] = "uri";
    /** column name */
    Conceptnet_Data_Select_Column["Weight"] = "weight";
})(Conceptnet_Data_Select_Column = exports.Conceptnet_Data_Select_Column || (exports.Conceptnet_Data_Select_Column = {}));
/** update columns of table "conceptnet.data" */
var Conceptnet_Data_Update_Column;
(function (Conceptnet_Data_Update_Column) {
    /** column name */
    Conceptnet_Data_Update_Column["End"] = "end";
    /** column name */
    Conceptnet_Data_Update_Column["Relation"] = "relation";
    /** column name */
    Conceptnet_Data_Update_Column["Start"] = "start";
    /** column name */
    Conceptnet_Data_Update_Column["Uri"] = "uri";
    /** column name */
    Conceptnet_Data_Update_Column["Weight"] = "weight";
})(Conceptnet_Data_Update_Column = exports.Conceptnet_Data_Update_Column || (exports.Conceptnet_Data_Update_Column = {}));
/** unique or primary key constraints on table "conversations" */
var Conversations_Constraint;
(function (Conversations_Constraint) {
    /** unique or primary key constraint */
    Conversations_Constraint["ConversationsObjectIdKey"] = "conversations_object_id_key";
})(Conversations_Constraint = exports.Conversations_Constraint || (exports.Conversations_Constraint = {}));
/** select columns of table "conversations" */
var Conversations_Select_Column;
(function (Conversations_Select_Column) {
    /** column name */
    Conversations_Select_Column["AppId"] = "app_id";
    /** column name */
    Conversations_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Conversations_Select_Column["DestroyedAt"] = "destroyed_at";
    /** column name */
    Conversations_Select_Column["EndUserId"] = "end_user_id";
    /** column name */
    Conversations_Select_Column["Metadata"] = "metadata";
    /** column name */
    Conversations_Select_Column["ObjectId"] = "object_id";
    /** column name */
    Conversations_Select_Column["ScopeName"] = "scope_name";
})(Conversations_Select_Column = exports.Conversations_Select_Column || (exports.Conversations_Select_Column = {}));
/** update columns of table "conversations" */
var Conversations_Update_Column;
(function (Conversations_Update_Column) {
    /** column name */
    Conversations_Update_Column["AppId"] = "app_id";
    /** column name */
    Conversations_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Conversations_Update_Column["DestroyedAt"] = "destroyed_at";
    /** column name */
    Conversations_Update_Column["EndUserId"] = "end_user_id";
    /** column name */
    Conversations_Update_Column["Metadata"] = "metadata";
    /** column name */
    Conversations_Update_Column["ObjectId"] = "object_id";
    /** column name */
    Conversations_Update_Column["ScopeName"] = "scope_name";
})(Conversations_Update_Column = exports.Conversations_Update_Column || (exports.Conversations_Update_Column = {}));
/** unique or primary key constraints on table "developers" */
var Developers_Constraint;
(function (Developers_Constraint) {
    /** unique or primary key constraint */
    Developers_Constraint["DevelopersApiKeyKey"] = "developers_api_key_key";
    /** unique or primary key constraint */
    Developers_Constraint["DevelopersEmailKey"] = "developers_email_key";
    /** unique or primary key constraint */
    Developers_Constraint["DevelopersGithubHandleKey"] = "developers_github_handle_key";
    /** unique or primary key constraint */
    Developers_Constraint["DevelopersObjectIdKey"] = "developers_object_id_key";
    /** unique or primary key constraint */
    Developers_Constraint["DevelopersUidKey"] = "developers_uid_key";
})(Developers_Constraint = exports.Developers_Constraint || (exports.Developers_Constraint = {}));
/** select columns of table "developers" */
var Developers_Select_Column;
(function (Developers_Select_Column) {
    /** column name */
    Developers_Select_Column["Active"] = "active";
    /** column name */
    Developers_Select_Column["ApiKey"] = "api_key";
    /** column name */
    Developers_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Developers_Select_Column["Email"] = "email";
    /** column name */
    Developers_Select_Column["GithubHandle"] = "github_handle";
    /** column name */
    Developers_Select_Column["Metadata"] = "metadata";
    /** column name */
    Developers_Select_Column["Name"] = "name";
    /** column name */
    Developers_Select_Column["ObjectId"] = "object_id";
    /** column name */
    Developers_Select_Column["Onboarded"] = "onboarded";
    /** column name */
    Developers_Select_Column["Uid"] = "uid";
})(Developers_Select_Column = exports.Developers_Select_Column || (exports.Developers_Select_Column = {}));
/** update columns of table "developers" */
var Developers_Update_Column;
(function (Developers_Update_Column) {
    /** column name */
    Developers_Update_Column["Active"] = "active";
    /** column name */
    Developers_Update_Column["ApiKey"] = "api_key";
    /** column name */
    Developers_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Developers_Update_Column["Email"] = "email";
    /** column name */
    Developers_Update_Column["GithubHandle"] = "github_handle";
    /** column name */
    Developers_Update_Column["Metadata"] = "metadata";
    /** column name */
    Developers_Update_Column["Name"] = "name";
    /** column name */
    Developers_Update_Column["ObjectId"] = "object_id";
    /** column name */
    Developers_Update_Column["Onboarded"] = "onboarded";
    /** column name */
    Developers_Update_Column["Uid"] = "uid";
})(Developers_Update_Column = exports.Developers_Update_Column || (exports.Developers_Update_Column = {}));
/** unique or primary key constraints on table "end_user_conversations" */
var End_User_Conversations_Constraint;
(function (End_User_Conversations_Constraint) {
    /** unique or primary key constraint */
    End_User_Conversations_Constraint["EndUserConversationsEndUserIdKey"] = "end_user_conversations_end_user_id_key";
    /** unique or primary key constraint */
    End_User_Conversations_Constraint["EndUserConversationsPkey"] = "end_user_conversations_pkey";
})(End_User_Conversations_Constraint = exports.End_User_Conversations_Constraint || (exports.End_User_Conversations_Constraint = {}));
/** select columns of table "end_user_conversations" */
var End_User_Conversations_Select_Column;
(function (End_User_Conversations_Select_Column) {
    /** column name */
    End_User_Conversations_Select_Column["ConversationId"] = "conversation_id";
    /** column name */
    End_User_Conversations_Select_Column["EndUserId"] = "end_user_id";
})(End_User_Conversations_Select_Column = exports.End_User_Conversations_Select_Column || (exports.End_User_Conversations_Select_Column = {}));
/** update columns of table "end_user_conversations" */
var End_User_Conversations_Update_Column;
(function (End_User_Conversations_Update_Column) {
    /** column name */
    End_User_Conversations_Update_Column["ConversationId"] = "conversation_id";
    /** column name */
    End_User_Conversations_Update_Column["EndUserId"] = "end_user_id";
})(End_User_Conversations_Update_Column = exports.End_User_Conversations_Update_Column || (exports.End_User_Conversations_Update_Column = {}));
/** unique or primary key constraints on table "end_users" */
var End_Users_Constraint;
(function (End_Users_Constraint) {
    /** unique or primary key constraint */
    End_Users_Constraint["EndUsersObjectIdKey"] = "end_users_object_id_key";
    /** unique or primary key constraint */
    End_Users_Constraint["EndUsersUuidKey"] = "end_users_uuid_key";
})(End_Users_Constraint = exports.End_Users_Constraint || (exports.End_Users_Constraint = {}));
/** select columns of table "end_users" */
var End_Users_Select_Column;
(function (End_Users_Select_Column) {
    /** column name */
    End_Users_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    End_Users_Select_Column["Metadata"] = "metadata";
    /** column name */
    End_Users_Select_Column["ObjectId"] = "object_id";
    /** column name */
    End_Users_Select_Column["ScopeName"] = "scope_name";
    /** column name */
    End_Users_Select_Column["Uuid"] = "uuid";
})(End_Users_Select_Column = exports.End_Users_Select_Column || (exports.End_Users_Select_Column = {}));
/** update columns of table "end_users" */
var End_Users_Update_Column;
(function (End_Users_Update_Column) {
    /** column name */
    End_Users_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    End_Users_Update_Column["Metadata"] = "metadata";
    /** column name */
    End_Users_Update_Column["ObjectId"] = "object_id";
    /** column name */
    End_Users_Update_Column["ScopeName"] = "scope_name";
    /** column name */
    End_Users_Update_Column["Uuid"] = "uuid";
})(End_Users_Update_Column = exports.End_Users_Update_Column || (exports.End_Users_Update_Column = {}));
/** select columns of table "events" */
var Events_Select_Column;
(function (Events_Select_Column) {
    /** column name */
    Events_Select_Column["Action"] = "action";
    /** column name */
    Events_Select_Column["ChangedFields"] = "changed_fields";
    /** column name */
    Events_Select_Column["DeveloperId"] = "developer_id";
    /** column name */
    Events_Select_Column["Table"] = "table";
    /** column name */
    Events_Select_Column["Timestamp"] = "timestamp";
})(Events_Select_Column = exports.Events_Select_Column || (exports.Events_Select_Column = {}));
/** select columns of table "history" */
var History_Select_Column;
(function (History_Select_Column) {
    /** column name */
    History_Select_Column["ConversationId"] = "conversation_id";
    /** column name */
    History_Select_Column["Interval"] = "interval";
    /** column name */
    History_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    History_Select_Column["Utterances"] = "utterances";
    /** column name */
    History_Select_Column["Window"] = "window";
})(History_Select_Column = exports.History_Select_Column || (exports.History_Select_Column = {}));
/** unique or primary key constraints on table "invites" */
var Invites_Constraint;
(function (Invites_Constraint) {
    /** unique or primary key constraint */
    Invites_Constraint["InvitesInviterIdInvitedEmailKey"] = "invites_inviter_id_invited_email_key";
    /** unique or primary key constraint */
    Invites_Constraint["InvitesObjectIdKey"] = "invites_object_id_key";
})(Invites_Constraint = exports.Invites_Constraint || (exports.Invites_Constraint = {}));
/** select columns of table "invites" */
var Invites_Select_Column;
(function (Invites_Select_Column) {
    /** column name */
    Invites_Select_Column["Accepted"] = "accepted";
    /** column name */
    Invites_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Invites_Select_Column["InvitedEmail"] = "invited_email";
    /** column name */
    Invites_Select_Column["InviterId"] = "inviter_id";
    /** column name */
    Invites_Select_Column["Metadata"] = "metadata";
    /** column name */
    Invites_Select_Column["ObjectId"] = "object_id";
    /** column name */
    Invites_Select_Column["ResendCount"] = "resend_count";
})(Invites_Select_Column = exports.Invites_Select_Column || (exports.Invites_Select_Column = {}));
/** update columns of table "invites" */
var Invites_Update_Column;
(function (Invites_Update_Column) {
    /** column name */
    Invites_Update_Column["Accepted"] = "accepted";
    /** column name */
    Invites_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Invites_Update_Column["InvitedEmail"] = "invited_email";
    /** column name */
    Invites_Update_Column["InviterId"] = "inviter_id";
    /** column name */
    Invites_Update_Column["Metadata"] = "metadata";
    /** column name */
    Invites_Update_Column["ObjectId"] = "object_id";
    /** column name */
    Invites_Update_Column["ResendCount"] = "resend_count";
})(Invites_Update_Column = exports.Invites_Update_Column || (exports.Invites_Update_Column = {}));
/** unique or primary key constraints on table "kv_scope_enum" */
var Kv_Scope_Enum_Constraint;
(function (Kv_Scope_Enum_Constraint) {
    /** unique or primary key constraint */
    Kv_Scope_Enum_Constraint["KvScopeEnumPkey"] = "kv_scope_enum_pkey";
})(Kv_Scope_Enum_Constraint = exports.Kv_Scope_Enum_Constraint || (exports.Kv_Scope_Enum_Constraint = {}));
/** select columns of table "kv_scope_enum" */
var Kv_Scope_Enum_Select_Column;
(function (Kv_Scope_Enum_Select_Column) {
    /** column name */
    Kv_Scope_Enum_Select_Column["Value"] = "value";
})(Kv_Scope_Enum_Select_Column = exports.Kv_Scope_Enum_Select_Column || (exports.Kv_Scope_Enum_Select_Column = {}));
/** update columns of table "kv_scope_enum" */
var Kv_Scope_Enum_Update_Column;
(function (Kv_Scope_Enum_Update_Column) {
    /** column name */
    Kv_Scope_Enum_Update_Column["Value"] = "value";
})(Kv_Scope_Enum_Update_Column = exports.Kv_Scope_Enum_Update_Column || (exports.Kv_Scope_Enum_Update_Column = {}));
/** unique or primary key constraints on table "kv_store" */
var Kv_Store_Constraint;
(function (Kv_Store_Constraint) {
    /** unique or primary key constraint */
    Kv_Store_Constraint["KvStoreKeyKey"] = "kv_store_key_key";
    /** unique or primary key constraint */
    Kv_Store_Constraint["KvStoreObjectIdKey"] = "kv_store_object_id_key";
    /** unique or primary key constraint */
    Kv_Store_Constraint["KvStorePkey"] = "kv_store_pkey";
})(Kv_Store_Constraint = exports.Kv_Store_Constraint || (exports.Kv_Store_Constraint = {}));
/** select columns of table "kv_store" */
var Kv_Store_Select_Column;
(function (Kv_Store_Select_Column) {
    /** column name */
    Kv_Store_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Kv_Store_Select_Column["CreatedBy"] = "created_by";
    /** column name */
    Kv_Store_Select_Column["Key"] = "key";
    /** column name */
    Kv_Store_Select_Column["Metadata"] = "metadata";
    /** column name */
    Kv_Store_Select_Column["ObjectId"] = "object_id";
    /** column name */
    Kv_Store_Select_Column["Scope"] = "scope";
    /** column name */
    Kv_Store_Select_Column["ScopeObjectId"] = "scope_object_id";
    /** column name */
    Kv_Store_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Kv_Store_Select_Column["Value"] = "value";
})(Kv_Store_Select_Column = exports.Kv_Store_Select_Column || (exports.Kv_Store_Select_Column = {}));
/** update columns of table "kv_store" */
var Kv_Store_Update_Column;
(function (Kv_Store_Update_Column) {
    /** column name */
    Kv_Store_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Kv_Store_Update_Column["CreatedBy"] = "created_by";
    /** column name */
    Kv_Store_Update_Column["Key"] = "key";
    /** column name */
    Kv_Store_Update_Column["Metadata"] = "metadata";
    /** column name */
    Kv_Store_Update_Column["ObjectId"] = "object_id";
    /** column name */
    Kv_Store_Update_Column["Scope"] = "scope";
    /** column name */
    Kv_Store_Update_Column["ScopeObjectId"] = "scope_object_id";
    /** column name */
    Kv_Store_Update_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Kv_Store_Update_Column["Value"] = "value";
})(Kv_Store_Update_Column = exports.Kv_Store_Update_Column || (exports.Kv_Store_Update_Column = {}));
/** select columns of table "last_utterance" */
var Last_Utterance_Select_Column;
(function (Last_Utterance_Select_Column) {
    /** column name */
    Last_Utterance_Select_Column["ConversationId"] = "conversation_id";
    /** column name */
    Last_Utterance_Select_Column["Interval"] = "interval";
    /** column name */
    Last_Utterance_Select_Column["SpeakerType"] = "speaker_type";
    /** column name */
    Last_Utterance_Select_Column["UpdatedAt"] = "updated_at";
    /** column name */
    Last_Utterance_Select_Column["Utterance"] = "utterance";
})(Last_Utterance_Select_Column = exports.Last_Utterance_Select_Column || (exports.Last_Utterance_Select_Column = {}));
/** unique or primary key constraints on table "objects" */
var Objects_Constraint;
(function (Objects_Constraint) {
    /** unique or primary key constraint */
    Objects_Constraint["ObjectsPkey"] = "objects_pkey";
})(Objects_Constraint = exports.Objects_Constraint || (exports.Objects_Constraint = {}));
/** select columns of table "objects" */
var Objects_Select_Column;
(function (Objects_Select_Column) {
    /** column name */
    Objects_Select_Column["CreatedAt"] = "created_at";
    /** column name */
    Objects_Select_Column["Metadata"] = "metadata";
    /** column name */
    Objects_Select_Column["ObjectId"] = "object_id";
})(Objects_Select_Column = exports.Objects_Select_Column || (exports.Objects_Select_Column = {}));
/** update columns of table "objects" */
var Objects_Update_Column;
(function (Objects_Update_Column) {
    /** column name */
    Objects_Update_Column["CreatedAt"] = "created_at";
    /** column name */
    Objects_Update_Column["Metadata"] = "metadata";
    /** column name */
    Objects_Update_Column["ObjectId"] = "object_id";
})(Objects_Update_Column = exports.Objects_Update_Column || (exports.Objects_Update_Column = {}));
/** column ordering options */
var Order_By;
(function (Order_By) {
    /** in ascending order, nulls last */
    Order_By["Asc"] = "asc";
    /** in ascending order, nulls first */
    Order_By["AscNullsFirst"] = "asc_nulls_first";
    /** in ascending order, nulls last */
    Order_By["AscNullsLast"] = "asc_nulls_last";
    /** in descending order, nulls first */
    Order_By["Desc"] = "desc";
    /** in descending order, nulls first */
    Order_By["DescNullsFirst"] = "desc_nulls_first";
    /** in descending order, nulls last */
    Order_By["DescNullsLast"] = "desc_nulls_last";
})(Order_By = exports.Order_By || (exports.Order_By = {}));
/** unique or primary key constraints on table "speaker_type_enum" */
var Speaker_Type_Enum_Constraint;
(function (Speaker_Type_Enum_Constraint) {
    /** unique or primary key constraint */
    Speaker_Type_Enum_Constraint["SpeakerTypeEnumPkey"] = "speaker_type_enum_pkey";
})(Speaker_Type_Enum_Constraint = exports.Speaker_Type_Enum_Constraint || (exports.Speaker_Type_Enum_Constraint = {}));
var Speaker_Type_Enum_Enum;
(function (Speaker_Type_Enum_Enum) {
    Speaker_Type_Enum_Enum["Bot"] = "bot";
    Speaker_Type_Enum_Enum["User"] = "user";
})(Speaker_Type_Enum_Enum = exports.Speaker_Type_Enum_Enum || (exports.Speaker_Type_Enum_Enum = {}));
/** select columns of table "speaker_type_enum" */
var Speaker_Type_Enum_Select_Column;
(function (Speaker_Type_Enum_Select_Column) {
    /** column name */
    Speaker_Type_Enum_Select_Column["Value"] = "value";
})(Speaker_Type_Enum_Select_Column = exports.Speaker_Type_Enum_Select_Column || (exports.Speaker_Type_Enum_Select_Column = {}));
/** update columns of table "speaker_type_enum" */
var Speaker_Type_Enum_Update_Column;
(function (Speaker_Type_Enum_Update_Column) {
    /** column name */
    Speaker_Type_Enum_Update_Column["Value"] = "value";
})(Speaker_Type_Enum_Update_Column = exports.Speaker_Type_Enum_Update_Column || (exports.Speaker_Type_Enum_Update_Column = {}));
/** select columns of table "utterances" */
var Utterances_Select_Column;
(function (Utterances_Select_Column) {
    /** column name */
    Utterances_Select_Column["ConversationId"] = "conversation_id";
    /** column name */
    Utterances_Select_Column["EndUserId"] = "end_user_id";
    /** column name */
    Utterances_Select_Column["NormalizedUtterance"] = "normalized_utterance";
    /** column name */
    Utterances_Select_Column["SpeakerType"] = "speaker_type";
    /** column name */
    Utterances_Select_Column["Timestamp"] = "timestamp";
    /** column name */
    Utterances_Select_Column["Utterance"] = "utterance";
})(Utterances_Select_Column = exports.Utterances_Select_Column || (exports.Utterances_Select_Column = {}));
exports.ParseContextDocument = gqlLodash_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query parseContext($turns: [ContextObject!]!) {\n  callParseContext(turns: $turns) {\n    context {\n      mentions {\n        evokes\n        phrase\n      }\n    }\n  }\n}\n    "], ["\n    query parseContext($turns: [ContextObject!]!) {\n  callParseContext(turns: $turns) {\n    context {\n      mentions {\n        evokes\n        phrase\n      }\n    }\n  }\n}\n    "])));
exports.ParseAceDocument = gqlLodash_1.gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query parseACE($text: String!, $format: ACEOutputType = drspp) {\n  callParseACE(text: $text, format: $format, guess: true) {\n    result\n  }\n}\n    "], ["\n    query parseACE($text: String!, $format: ACEOutputType = drspp) {\n  callParseACE(text: $text, format: $format, guess: true) {\n    result\n  }\n}\n    "])));
exports.ParaphraseSentenceDocument = gqlLodash_1.gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query paraphraseSentence($sentence: String!, $count: Int! = 3) {\n  callParaphraseSentence(input: $sentence, number_of_paraphrases: $count) {\n    paraphrases\n  }\n}\n    "], ["\n    query paraphraseSentence($sentence: String!, $count: Int! = 3) {\n  callParaphraseSentence(input: $sentence, number_of_paraphrases: $count) {\n    paraphrases\n  }\n}\n    "])));
exports.PredictNextTurnDocument = gqlLodash_1.gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query predictNextTurn($history: [String!]!, $alternatives: [String!]!) {\n  callNextDialogTurn(history: $history, alternatives: $alternatives) {\n    nextTurn: alternative\n    confidence\n  }\n}\n    "], ["\n    query predictNextTurn($history: [String!]!, $alternatives: [String!]!) {\n  callNextDialogTurn(history: $history, alternatives: $alternatives) {\n    nextTurn: alternative\n    confidence\n  }\n}\n    "])));
exports.MatchIntentDocument = gqlLodash_1.gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    query matchIntent($input: String!, $intenst: [String!]!, $threshold: Float! = 0.7) {\n  callMatchIntent(\n    input: $input\n    possible_intents: $intenst\n    similarity_threshold: $threshold\n  ) {\n    matches {\n      intent: matched_intent\n      confidence: similarity\n      slots: word_matches {\n        slot\n        value: extracted_word\n        match_type\n        confidence: similarity\n      }\n    }\n  }\n}\n    "], ["\n    query matchIntent($input: String!, $intenst: [String!]!, $threshold: Float! = 0.7) {\n  callMatchIntent(\n    input: $input\n    possible_intents: $intenst\n    similarity_threshold: $threshold\n  ) {\n    matches {\n      intent: matched_intent\n      confidence: similarity\n      slots: word_matches {\n        slot\n        value: extracted_word\n        match_type\n        confidence: similarity\n      }\n    }\n  }\n}\n    "])));
exports.MeasureSimilarityDocument = gqlLodash_1.gql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    query measureSimilarity($sentence: String!, $compareWith: [String!]!) {\n  callMeasureSimilarity(sentence: $sentence, compareWith: $compareWith) {\n    result {\n      score\n      sentencePair\n    }\n  }\n}\n    "], ["\n    query measureSimilarity($sentence: String!, $compareWith: [String!]!) {\n  callMeasureSimilarity(sentence: $sentence, compareWith: $compareWith) {\n    result {\n      score\n      sentencePair\n    }\n  }\n}\n    "])));
exports.ResolveCoreferencesDocument = gqlLodash_1.gql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    query resolveCoreferences($text: String!) {\n  callNlpDoc(text: $text) {\n    coref: extension {\n      detected: has_coref\n      resolved: coref_resolved\n      scores: coref_scores {\n        candidates: scores {\n          mention\n          score\n        }\n      }\n    }\n  }\n}\n    "], ["\n    query resolveCoreferences($text: String!) {\n  callNlpDoc(text: $text) {\n    coref: extension {\n      detected: has_coref\n      resolved: coref_resolved\n      scores: coref_scores {\n        candidates: scores {\n          mention\n          score\n        }\n      }\n    }\n  }\n}\n    "])));
exports.ToVecDocument = gqlLodash_1.gql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    query toVec($text: String!) {\n  callNlpDoc(text: $text) {\n    has_vector\n    vector\n    vector_norm\n    sentences: sents {\n      has_vector\n      vector_norm\n      vector\n      text\n    }\n    entities: ents {\n      text\n      has_vector\n      vector_norm\n      vector\n    }\n  }\n}\n    "], ["\n    query toVec($text: String!) {\n  callNlpDoc(text: $text) {\n    has_vector\n    vector\n    vector_norm\n    sentences: sents {\n      has_vector\n      vector_norm\n      vector\n      text\n    }\n    entities: ents {\n      text\n      has_vector\n      vector_norm\n      vector\n    }\n  }\n}\n    "])));
exports.GetSentimentDocument = gqlLodash_1.gql(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    query getSentiment($text: String!) {\n  callNlpDoc(text: $text) {\n    sentiment\n    sentences: sents {\n      text\n      sentiment\n    }\n  }\n}\n    "], ["\n    query getSentiment($text: String!) {\n  callNlpDoc(text: $text) {\n    sentiment\n    sentences: sents {\n      text\n      sentiment\n    }\n  }\n}\n    "])));
exports.ParseTextDocument = gqlLodash_1.gql(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    query parseText($text: String!) {\n  callNlpDoc(text: $text) {\n    categories: cats {\n      label\n      score\n    }\n    entities: ents {\n      label\n      lemma\n      text\n    }\n    sentences: sents {\n      text\n      label\n      lemma\n    }\n  }\n}\n    "], ["\n    query parseText($text: String!) {\n  callNlpDoc(text: $text) {\n    categories: cats {\n      label\n      score\n    }\n    entities: ents {\n      label\n      lemma\n      text\n    }\n    sentences: sents {\n      text\n      label\n      lemma\n    }\n  }\n}\n    "])));
exports.ExtractNumericDataDocument = gqlLodash_1.gql(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    query extractNumericData($text: String!) {\n  callNlpDoc(text: $text) {\n    tokens {\n      numeric_analysis: extension {\n        data: nfh_head\n        has_numeric: is_nfh\n      }\n    }\n  }\n}\n    "], ["\n    query extractNumericData($text: String!) {\n  callNlpDoc(text: $text) {\n    tokens {\n      numeric_analysis: extension {\n        data: nfh_head\n        has_numeric: is_nfh\n      }\n    }\n  }\n}\n    "])));
exports.ParseTextTokensDocument = gqlLodash_1.gql(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    query parseTextTokens($text: String!) {\n  callNlpDoc(text: $text) {\n    tokens {\n      dependency: dep\n      entity_type: ent_type\n      is_alpha\n      is_currency\n      is_digit\n      is_oov\n      is_sent_start\n      is_stop\n      is_title\n      lemma\n      like_email\n      like_num\n      like_url\n      part_of_speech: pos\n      prob\n      tag\n      text\n    }\n  }\n}\n    "], ["\n    query parseTextTokens($text: String!) {\n  callNlpDoc(text: $text) {\n    tokens {\n      dependency: dep\n      entity_type: ent_type\n      is_alpha\n      is_currency\n      is_digit\n      is_oov\n      is_sent_start\n      is_stop\n      is_title\n      lemma\n      like_email\n      like_num\n      like_url\n      part_of_speech: pos\n      prob\n      tag\n      text\n    }\n  }\n}\n    "])));
exports.RenderCssDocument = gqlLodash_1.gql(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    query renderCSS($ssml: String!, $css: String) {\n  callCompose(\n    init: {styled_ssml: $ssml, voice_css: $css}\n    pipeline: [{op: \"callApplyVoiceCSS\", transform: \"r => ({text: r.ssml})\"}, {op: \"callTextToSpeech\", transform: \"\"}]\n  ) {\n    result\n  }\n}\n    "], ["\n    query renderCSS($ssml: String!, $css: String) {\n  callCompose(\n    init: {styled_ssml: $ssml, voice_css: $css}\n    pipeline: [{op: \"callApplyVoiceCSS\", transform: \"r => ({text: r.ssml})\"}, {op: \"callTextToSpeech\", transform: \"\"}]\n  ) {\n    result\n  }\n}\n    "])));
exports.SpeechToTextDocument = gqlLodash_1.gql(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    query speechToText($audio: String!) {\n  callSpeechToText(audioB64: $audio) {\n    transcript: alternatives {\n      text: transcript\n    }\n  }\n}\n    "], ["\n    query speechToText($audio: String!) {\n  callSpeechToText(audioB64: $audio) {\n    transcript: alternatives {\n      text: transcript\n    }\n  }\n}\n    "])));
exports.TextToSpeechDocument = gqlLodash_1.gql(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    query textToSpeech($text: String!) {\n  callTextToSpeech(text: $text) {\n    audio: audioB64\n  }\n}\n    "], ["\n    query textToSpeech($text: String!) {\n  callTextToSpeech(text: $text) {\n    audio: audioB64\n  }\n}\n    "])));
var defaultWrapper = function (sdkFunction) { return sdkFunction(); };
function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        parseContext: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ParseContextDocument), variables, requestHeaders); });
        },
        parseACE: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ParseAceDocument), variables, requestHeaders); });
        },
        paraphraseSentence: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ParaphraseSentenceDocument), variables, requestHeaders); });
        },
        predictNextTurn: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.PredictNextTurnDocument), variables, requestHeaders); });
        },
        matchIntent: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.MatchIntentDocument), variables, requestHeaders); });
        },
        measureSimilarity: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.MeasureSimilarityDocument), variables, requestHeaders); });
        },
        resolveCoreferences: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ResolveCoreferencesDocument), variables, requestHeaders); });
        },
        toVec: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ToVecDocument), variables, requestHeaders); });
        },
        getSentiment: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.GetSentimentDocument), variables, requestHeaders); });
        },
        parseText: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ParseTextDocument), variables, requestHeaders); });
        },
        extractNumericData: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ExtractNumericDataDocument), variables, requestHeaders); });
        },
        parseTextTokens: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.ParseTextTokensDocument), variables, requestHeaders); });
        },
        renderCSS: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.RenderCssDocument), variables, requestHeaders); });
        },
        speechToText: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.SpeechToTextDocument), variables, requestHeaders); });
        },
        textToSpeech: function (variables, requestHeaders) {
            return withWrapper(function () { return client.request(graphql_1.print(exports.TextToSpeechDocument), variables, requestHeaders); });
        }
    };
}
exports.getSdk = getSdk;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
// Generated on 2021-02-28T05:19:44+00:00
//# sourceMappingURL=sdk.js.map