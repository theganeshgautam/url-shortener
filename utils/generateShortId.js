// import { nanoid } from "nanoid";

// const generateShortId = () => {
//   return nanoid(8); 
// };

// export default generateShortId;





import { customAlphabet } from "nanoid";

// Base62 alphabet (0-9a-zA-Z)
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nanoid = customAlphabet(alphabet, 7);

const generateShortId = () => nanoid();

export default generateShortId;
