const updateMetadata = (sectionId: string) => {
    const titleMap: { [key: string]: string } = {
      home: 'RachaelWebPortfolio/Home',
      about: 'RachaelWebPortfolio/About',
      services: 'RachaelWebPortfolio/Services',
      skills: 'RachaelWebPortfolio/Skills',
      portfolio: 'RachaelWebPortfolio/Portfolio',
      contact: 'RachaelWebPortfolio/Contact'
    };
  
    document.title = titleMap[sectionId] || 'RachaelWebPortfolio';
  };
  