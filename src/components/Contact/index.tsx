
type ContactParams = {
  tel ?: string;
  adressMail ?: string;
};


export default function Contact({tel, adressMail}:ContactParams) {
  return (
    <>
          <span  className="">{tel}</span>
          <span className=" ">{adressMail}</span>
    </>
  )
}
