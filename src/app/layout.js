import {
  poppins,
  notoSans,
  notoSansKR,
  kaveHaffer,
  kaveHafferText,
} from "./fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable} ${notoSansKR.variable} ${kaveHaffer.variable} ${kaveHafferText.variable}`}
    >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
