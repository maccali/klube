const monthNames = [
  "Janeiro", "Fevereiro", "Março",
  "Abril", "Maio", "Junho", "Julho",
  "Agosto", "Setembro", "Outubro",
  "Novembro", "Dezembro"
];

const date = {
  formatDateEventForm: (date) => {

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `Dia ${day} de ${monthNames[monthIndex]}, ${year}`;
  },

  formatTimeEventForm: (date) => {

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours} Horas e ${minutes} minutos`;
  },
}

export default date;
