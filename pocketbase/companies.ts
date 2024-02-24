
import PocketBase from "pocketbase";

const url = process.env.pocketbaseUrl;
const perPage = 10;

const getClient = async (): Promise<PocketBase> => {
    const client = new PocketBase(url);
    await client.admins.authWithPassword(
      process.env.pocketbaseUsername as string,
      process.env.pocketbasePassword as string
    );
    return client;
  };


export const getAllCompanies = async (
    page = 1
  ): Promise<PocketbaseResponse<IUser>> => {
    const client = await getClient();
    return await client.collection("companies").getList(page, perPage);
  };
  
  export const deleteCompany = async (userId: string): Promise<void> => {
    const client = await getClient();
    await client.collection("companies").delete(userId);
  };
  