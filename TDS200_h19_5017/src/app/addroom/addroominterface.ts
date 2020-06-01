// interface som lagrer dataen for at den kan lett bli brukt senere i
// f. eks. html filen for å vise spesifikt det vi ønsker

export default interface Post {
  Id?: string;
  Name: string;
  Number: number;
  Description: string;
  User: any;
  Status: string;
  OccupiedBy: string;
}
