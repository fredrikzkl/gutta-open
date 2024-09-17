export type HallOfFameEntry = {
    year : string;
    location : string;
    img: string;
    winner: string;
    second? : string;
    third?: string;
    scoreboard?: ScoreBoard;
};

export type ScoreBoard = {
    name : string;
    courseHandicap : number;
    playerScores : PlayerScore[];
}

export type PlayerScore = {
    name: string;
    gross : number;
    net: number;
}

