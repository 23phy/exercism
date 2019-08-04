interface OldData {
  [key: string]: Array<string>
}

interface NewData {
  [key: string]: number
}

export default function transform(oldData: OldData): NewData {
  let newData: NewData = {} as NewData;

  for(let [property, values] of Object.entries(oldData)) {
    values.forEach((value: string) => newData[value.toLowerCase()] = Number(property));
  }

  return newData;
}