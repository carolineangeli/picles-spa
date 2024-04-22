interface IFilterColumns {
    name: 'gender' | 'size' | 'type'
    title: string
    options: { value: string; text: string }[]
  }
  
  export const filterColumns: IFilterColumns[] = [
    {
      name: 'type',
      title: 'Espécie',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Dogs',
          text: 'Cachorros',
        },
        {
          value: 'Cats',
          text: 'Gatos',
        },
      ],
    },
    {
      name: 'size',
      title: 'Porte',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Small',
          text: 'Pequeno',
        },
        {
          value: 'Medium',
          text: 'Médio',
        },
        {
          value: 'Big',
          text: 'Grande',
        },
      ],
    },
    {
      name: 'gender',
      title: 'Sexo',
      options: [
        {
          value: '',
          text: 'Todos',
        },
        {
          value: 'Female',
          text: 'Fêmea',
        },
        {
          value: 'Male',
          text: 'Macho',
        },
      ],
    },
  ]