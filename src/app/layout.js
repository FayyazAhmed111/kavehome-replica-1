import {
  poppins,
  notoSans,
  notoSansKR,
  kaveHaffer,
  kaveHafferText,
  martinaRegular,
} from "./fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable} ${notoSansKR.variable} ${kaveHaffer.variable} ${kaveHafferText.variable} ${martinaRegular.variable}`}
    >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
