import { client } from "../api/client"

export async function headerMenu() {
    const menu = await client.fetch(`*[_type == "menu"]`);
    return menu;
  }

  export async function profileData() {
    // const profileApi = await client.fetch(`*[_type == "profile"]`);
    const profileApi = await client.fetch(`*[_type == "profile"]`);
    return profileApi;
  }

  