// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publication",
          title: "Publication",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-students",
          title: "Students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-group-meetings",
              title: "Group Meetings",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "books-meeting1",
          title: 'Meeting1',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/meeting1/";
            },},{id: "books-meeting2",
          title: 'Meeting2',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/meeting2/";
            },},{id: "books-meeting3",
          title: 'Meeting3',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/meeting3/";
            },},{id: "news-dr-yuedong-xu-has-migrated-to-college-of-computer-science-and-artificial-intelligence-计算与智能创新学院-and-ai3-institute-人工智能创新与产业研究院-fudan-university",
          title: 'Dr. Yuedong Xu has migrated to College of Computer Science and Artificial Intelligence...',
          description: "",
          section: "News",},{id: "news-dr-yuedong-xu-serves-as-an-adjunct-professor-of-shenzhen-loop-area-institute-深圳河套学院-欢迎申请联合培养博士生",
          title: 'Dr. Yuedong Xu serves as an adjunct professor of Shenzhen Loop Area Institute...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-our-work-on-federated-llm-finetuning-is-accepted-to-neurips-2025-sparkles-smile",
          title: 'Our work on Federated LLM Finetuning is accepted to NeurIPS 2025 :sparkles: :smile:...',
          description: "",
          section: "News",},{id: "news-our-work-on-checkpointing-and-failure-recovery-for-llm-training-is-accepted-to-ieee-infocom-2026-sparkles-smile",
          title: 'Our work on checkpointing and failure recovery for LLM training is accepted to...',
          description: "",
          section: "News",},{id: "projects-machine-learning-systems",
          title: 'Machine Learning Systems',
          description: "making deep learning training and inference faster",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_name/";
            },},{id: "projects-multimedia-networking",
          title: 'Multimedia Networking',
          description: "optimizing quality and user experience of video streaming services",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_name/";
            },},{id: "projects-network-economics-and-stochastic-analysis",
          title: 'Network Economics and Stochastic Analysis',
          description: "earning more or paying less, and original study on information freshness",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_name/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
