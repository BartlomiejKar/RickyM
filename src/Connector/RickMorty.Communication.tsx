import { IEpisode } from "../Models/Episodes.model";
import { IResponse } from "../Models/RickyMortyResults";

class CommunicationRickMorty {
  public static async GET_charackters(): Promise<IResponse> {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  public static async GET_charactersFromNextPage(
    url: string
  ): Promise<IResponse> {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  public static async GET_SearchCharacters(
    queryparams: URLSearchParams
  ): Promise<IResponse> {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?${queryparams}`,

        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  public static async GET_Episodes(url: string): Promise<IEpisode> {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();

      return await data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default CommunicationRickMorty;
