export default function CountryName({params}:any) {
    
    const countries:{
        name:string,
        population:number,
        capital:string
    }[] =[{
        name: "Pakistan",
        population:1237788999,
        capital:"Islamabad"
    },
    {
        name: "India",
        population:123672909,
        capital:"Delhi"
    },
    {
        name: "Australia",
        population:1237754999,
        capital:"Canberra"
    },
    {
        name: "China",
        population:12377889256,
        capital:"Beijing"
    },
    {
        name: "Indonesia",
        population:12377889673,
        capital:"Jakarta"
    },
];
  function findCountry(country_url:string){
  //searching 
  return countries.find(country =>country.name.toLowerCase() == country_url.toLowerCase());
  }
 let result = findCountry(params.country_name);


    
    
    return (
     <div> {
              result ? (
                <>
                <h1>Country Name: {result.name}</h1>
       <h1>Country Capital: {result.capital}</h1>
       <h1>Country Population: {result.population}</h1>
                
                </>
              ) : (
                <h1>{params.country_name} Not Found</h1>
              )
            }
      
     </div>
    );
   }
