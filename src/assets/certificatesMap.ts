import certDbms from '@cert-dbms';
import certCpp from '@cert-cpp';
import certDsa from '@cert-dsa';
import certWns from '@cert-wns';
import certCodeclash from '@cert-codeclash';

export const CERTIFICATE_PDF_MAP: Record<string, string> = {
  'infosys-dbms': certDbms,
  'infosys-cpp': certCpp,
  'coding-tantra-dsa': certDsa,
  'wns-cybersmart': certWns,
  'codeclash-participation': certCodeclash,
};
