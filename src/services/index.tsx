export interface DataProps {
    name?: string;
    type?: string;
    muscle?: string;
    difficulty?: string;
    offset?: string;
}

export const fetchData = async (name?: any, type?: any, muscle?: any, difficulty?: any, offset?: any) => {
    let controller: AbortController;
    const timeout = 5000; // Tempo limite em milissegundos
  
    const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises';
    const headers = {
      'X-RapidAPI-Key': '0c4e570fe9msh72621c65ec4fa41p135a8ajsnfce2d9275253',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    };
  
    const signal = new AbortController().signal;
  
    controller = new AbortController();
    setTimeout(() => controller.abort(), timeout);
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers,
        signal,
      });
  
      const data = await response.json();
    //   console.log(data);
      return data;
    } catch (error: any) {
      if (error.name === 'AbortError') {
          console.log('A requisição foi cancelada');
      } else {
        console.error(error);
      }
    }
  };
  
  // Função para abortar a requisição
  export const abortRequest = async (controller: AbortController) => {
    if (controller) {
      controller.abort();
    }
  };
  
  
  