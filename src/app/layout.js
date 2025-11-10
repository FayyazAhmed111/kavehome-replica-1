import {
  poppins,
  notoSans,
  notoSansKR,
  kaveHaffer,
  kaveHafferRegular,
  martinaRegular,
  martinaBold,
} from "./fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSans.variable} ${notoSansKR.variable} ${kaveHaffer.variable} ${kaveHafferRegular.variable} ${martinaRegular.variable} ${martinaBold.variable}`}
    >
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
