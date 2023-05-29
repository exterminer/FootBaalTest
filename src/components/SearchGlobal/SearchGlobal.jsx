import { useEffect, useState } from "react";
import { api } from "../../service";
import {
  StyledDiv,
  StyledForm,
  StyledDivLista,
  StyledUL,
  StyledLi,
  StyledDivPhoto,
  StyledLeagueDataDiv,
  StyledLeagueDataLineUpsDiv,
  StyledLeagueDataLineUpsUl
} from "./styledSearchGlobal";

export function SearchGlobal() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const [seasons, setSeasons] = useState([]);
  const [season, setSeason] = useState("");

  const [leagues, setLeagues] = useState([]);
  const [league, setLeague] = useState("");

  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState("");

  const [players, setPlayers] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  const [teamsStatistic, setTeamStatistic] = useState({});

  const objetoResgatado = localStorage.getItem("authorization");
  const apiKey = JSON.parse(objetoResgatado);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/countries", {
          headers: {
            "x-apisports-key": apiKey,
          },
        });
        console.log(response.data.response);
        setCountries(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiKey]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    const fetchLeagues = async () => {
      if (country) {
        try {
          const response = await api.get("/leagues", {
            headers: {
              "x-apisports-key": apiKey,
            },
            params: {
              country: country,
            },
          });

          //  let data = response.data.response;
          //  console.log(data)
          //  const leagueNames = data.map((item) => item.league.name);
          setLeagues(response.data.response);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchLeagues();
  }, [country, apiKey]);

  useEffect(() => {
    const fetchSeasons = async () => {
      if (league) {
        try {
          const response = await api.get("/leagues/seasons", {
            headers: {
              "x-apisports-key": apiKey,
            },
          });

          setSeasons(response.data.response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchSeasons();
  }, [apiKey, league]);

  useEffect(() => {
    const fetchTeams = async () => {
      if (league) {
        try {
          const response = await api.get("/teams", {
            headers: {
              "x-apisports-key": apiKey,
            },
            params: {
              country: country,
              season: season,
              league: league,
            },
          });
          setTeams(response.data.response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTeams();
  }, [apiKey, country, season, league]);

  useEffect(() => {
    const fetchPlayers = async () => {
      if (team) {
        try {
          const response = await api.get("/players/squads", {
            headers: {
              "x-apisports-key": apiKey,
            },
            params: {
              team: team,
            },
          });
          console.log(response.data.response);
          setPlayers(response.data.response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchPlayers();
  }, [apiKey, team]);

  useEffect(() => {
    const fetchTeamsStatistic = async () => {
      if (team) {
        try {
          const response = await api.get("/teams/statistics", {
            headers: {
              "x-apisports-key": apiKey,
            },
            params: {
              team: team,
              league: league,
              season: season,
            },
          });
          console.log(response.data.response);
          setTeamStatistic(response.data.response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchTeamsStatistic();
  }, [apiKey, team, league, season]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await api.get("/leagues", {
        headers: {
          "x-apisports-key": apiKey,
        },
        params: {
          country: country,
        },
      });

      setLeagues(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledDiv>
      <StyledForm onSubmit={handleSearch}>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Selecione um país</option>
          {countries.map((pais) => (
            <option key={pais.id} value={pais.name}>
              {pais.name}
            </option>
          ))}
        </select>
        <select
          value={league}
          onChange={(event) => setLeague(event.target.value)}
        >
          <option value="">Selecione uma liga</option>

          {leagues.map((liga) => (
            <option key={liga.league.id} value={liga.league.id}>
              {liga.league.name}
            </option>
          ))}
        </select>
        <select
          value={season}
          onChange={(event) => {
            setSeason(event.target.value);
          }}
        >
          <option value="">Selecione uma temporada</option>
          {seasons.map((temporada) => (
            <option key={temporada} value={temporada}>
              {temporada}
            </option>
          ))}
        </select>

        <select value={team} onChange={(event) => setTeam(event.target.value)}>
          <option value="">Selecione um time</option>
          {teams.map((time) => (
            <option key={time.id} value={time.team.id}>
              {time.team.name}
            </option>
          ))}
        </select>

        <button>Procurar</button>
      </StyledForm>
      {players.length > 0 ? (
        <div>
          <h2>Jogadores</h2>
          <StyledUL>
            {players.map((jogadores) =>
              jogadores.players.map((jogador) => (
                <StyledLi key={jogador.id}>
                  <div>{jogador.number}</div>
                  <StyledDivPhoto>
                    <div>
                      <img src={jogador.photo} alt="" />
                    </div>
                    <div>
                      <p>{jogador.name}</p>
                    </div>
                  </StyledDivPhoto>
                  <div>
                    <p>Idade: {jogador.age}</p>
                  </div>
                  <div>{jogador.position}</div>
                </StyledLi>
              ))
            )}
          </StyledUL>
          <StyledLeagueDataDiv>
            <h2>{teamsStatistic.league.name}</h2>
            <h3>Total de jogos: {teamsStatistic.fixtures.played.total}</h3>
            <p>Jogos em casa: {teamsStatistic.fixtures.played.home} </p>
            <span>
              Vitorias:{teamsStatistic.fixtures.wins.home} / Derrotas:
              {teamsStatistic.fixtures.loses.home} / Empates:
              {teamsStatistic.fixtures.draws.home}
            </span>
            <p>Jogos fora: {teamsStatistic.fixtures.played.home} </p>
            <span>
              Vitorias:{teamsStatistic.fixtures.wins.away} / Derrotas:
              {teamsStatistic.fixtures.loses.away} / Empates:
              {teamsStatistic.fixtures.draws.away}
            </span>
          </StyledLeagueDataDiv>
          <StyledLeagueDataLineUpsDiv>
            <StyledLeagueDataLineUpsUl>
              <div>
                <h3>Formaçoes utilizadas</h3>
                {teamsStatistic.lineups.map((fomrmaçao) => (
                  <li>{fomrmaçao.formation}</li>
                ))}
              </div>
              <div>
                <h3>Vezes Usada</h3>
                {teamsStatistic.lineups.map((fomrmaçao) => (
                  <li>{fomrmaçao.played}</li>
                ))}
              </div>
            </StyledLeagueDataLineUpsUl>
          </StyledLeagueDataLineUpsDiv>
        </div>
      ) : (
        <StyledDivLista>
          <h3>Faça a pesquisa para ter acesso as informações</h3>
        </StyledDivLista>
      )}

      <div>
        <h4>Informaçoes do time selecionado</h4>
      </div>
    </StyledDiv>
  );
}
