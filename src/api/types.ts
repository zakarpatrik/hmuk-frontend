export interface Payload<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface ApiResponse<T> {
  id: number;
  attributes: T;
}

interface TextAttributes {
  text?: string;
  bold?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  italic?: boolean;
  code?: boolean;
}

interface LinkAttributes extends TextAttributes {
  type: 'link';
  url: string;
  children?: TextNode[];
}

export interface TextNode extends TextAttributes {
  type?: 'text';
  children: TextNode[];
}

export interface ListItemNode {
  type: 'list-item';
  children: TextNode[];
}

export interface ListNode {
  type: 'list';
  format: 'unordered' | 'ordered';
  children: ListItemNode[];
}

interface QuoteNode {
  type: 'quote';
  children: TextNode[];
}

export type ContentNode = TextNode | ListNode | QuoteNode | LinkAttributes;

interface ParagraphNode {
  type: 'paragraph' | 'heading' | 'list' | 'quote';
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  format?: 'unordered' | 'ordered';
  children: ContentNode[];
}

export interface LongText extends Array<ParagraphNode> {}

export interface Uegyvedek {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    Nev: string;
    Iroda?: string;
    Cim?: string;
    Telefonszam: Telefonszam[];
    Email: Email[];
    Tisztseg?: Tisztseg;
  };
}

export interface Email {
  Email?: string;
}

export interface Telefonszam {
  Telefonszam?: string;
}

export interface Tisztseg {
  Elnokseg?: Elnokseg;
  Ellenorzo_bizottsag?: EllenorzoBizottsag;
  Fegyelmi_bizottsag?: FegyelmiBizottsag;
  Osszeferhetetlensegi_bizottsag?: OsszeferhetetlensegiBizottsag;
}

interface MemberAttributes {
  Nev: string;
  Iroda: string;
  Cim: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type MemberData = ApiResponse<MemberAttributes>;

interface MemberDataWrapper {
  data: MemberData | MemberData[];
}

export interface Elnokseg {
  Elnok: MemberDataWrapper;
  Elnokhelyettesek: MemberDataWrapper;
  Titkar: MemberDataWrapper;
  VezetoFegyelmiBiztos: MemberDataWrapper;
  FegyelmiMegbizott: MemberDataWrapper;
  Tagok: MemberDataWrapper;
}

export interface EllenorzoBizottsag {
  Elnok: MemberDataWrapper;
  Tagok: MemberDataWrapper;
}

export interface FegyelmiBizottsag {
  Tagok: MemberDataWrapper;
}

export interface OsszeferhetetlensegiBizottsag {
  Elnok: MemberDataWrapper;
  Tagok: MemberDataWrapper;
  MukKuldottek: MemberDataWrapper;
}

interface Committee {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Elnokseg: Elnokseg;
  EllenorzoBizottsag: EllenorzoBizottsag;
  FegyelmiBizottsag: FegyelmiBizottsag;
  OsszeferhetetlensegiBizottsag: OsszeferhetetlensegiBizottsag;
  Cim: string;
  Alcim: LongText;
}

export type CommitteeApiAttributes = ApiResponse<Committee>;

interface CustomerRights {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Cim: string;
  Alcim: LongText;
  Tartalom: LongText;
}

export type CustomerRightsApiResponse = ApiResponse<CustomerRights>;

interface HowToChoose {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Cim: string;
  Alcim: LongText;
  Tartalom: LongText;
}

export type HowToChooseApiResponse = ApiResponse<HowToChoose>;

interface Search {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Cim: string;
  Alcim: LongText;
}

export type SearchApiResponse = ApiResponse<Search>;

interface Home {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Cim: string;
  Tajekoztato: LongText;
  Hirdetmeny: LongText;
  UgyvediKamaraSzoveg: LongText;
}

export type HomeApiResponse = ApiResponse<Home>;

interface UsefulLinks {
  Cim: string;
  Alcim: LongText;
  HasznosLinkek: {
    KiirandoSzoveg: string;
    Link: string;
  }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export type UsefulLinksApiResponse = ApiResponse<UsefulLinks>;
