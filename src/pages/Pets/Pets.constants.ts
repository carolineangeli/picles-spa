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
          value: 'small',
          text: 'Pequeno',
        },
        {
          value: 'Medium',
          text: 'Médio',
        },
        {
          value: 'big',
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
          value: 'female',
          text: 'Fêmea',
        },
        {
          value: 'male',
          text: 'Macho',
        },
      ],
    },
  ]