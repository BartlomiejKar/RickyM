import CommunicationRickMorty from "../Connector/RickMorty.Communication";
import { ISearchParams } from "../Models/SearchParams.model";

class RickMortyServices {
  public static async GET_characters() {
    return await CommunicationRickMorty.GET_charackters();
  }
  public static async GET_charactersFromNextPage(url: string) {
    return await CommunicationRickMorty.GET_charactersFromNextPage(url);
  }
  public static async GET_searchCharacters(param: ISearchParams, wait: number) {
    const queryparams = new URLSearchParams({
      name: param.name,
      status: param.status,
      species: param.species,
    });
    const reponse = new Promise((resolve) => {
      let timeout;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        resolve(CommunicationRickMorty.GET_SearchCharacters(queryparams));
      }, wait);
    });
    return await reponse;
  }
  public static async GET_episodes(url: Array<string>) {
    const promises = url.map(async (adress: string) => {
      const response = await CommunicationRickMorty.GET_Episodes(adress);
      return response;
    });
    const res = await Promise.all(promises);
    return res;
  }
}

export default RickMortyServices;
