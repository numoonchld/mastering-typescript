/* FUNCTION'S ARGUMENTS AND RETURN TYPE DECLARATION */
const add = (a: number, b: number): number => {
  return a + b;
};

/* TYPE INFERENCE FOR FUNCTIONS */
const subtract = (a: number, b: number) => {
  // here, return annotation is not specified
  return a - b;
};

/* ANONYMOUS FUNCTION ANNOTATIONS */
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

/* VOID TYPE ANNOTATION FOR FUNCTION RETURN */
const logger = (message: string): void => {
  console.log(message);
  // no return keyword being specifed is fine
  // if necessary in other situations, follwoing returns are also acceptable for void
  // return null
  // return undefined
};

/* NEVER TYPE ANNOTATION FOR FUNCTION RETURN  */
const throwError = (message: string): never => {
  throw new Error(message);
};

/* ANNOTATION FOR DESTRUCTURING */
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// WITHOUT OBJECT DESTRUCTURING
const logWeather1 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather1(todaysWeather);

// WITH OBJECT DESTRUCTURING
const logWeather2 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather2(todaysWeather);
