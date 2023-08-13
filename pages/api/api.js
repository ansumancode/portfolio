import { client } from "../api/client";

export async function headerMenu() {
  const menu = await client.fetch(`*[_type == "menu"]`);
  return menu;
}

export async function profileData() {
  // const profileApi = await client.fetch(`*[_type == "profile"]`);
  const profileApi = await client.fetch(`*[_type == "profile"]{
      firstname,
      lastname,
      image,
      address,
      dateOfBirth,
      designation,
      email,
      socialLinks,
      "downlaodResume": button.asset->url ,
      "label" : button.label
      
    }`);
  return profileApi;
}
 export async function aboutAndSkills(){
  const aboutMe = await client.fetch(`*[_type == "page"]`);
  return aboutMe;
 }