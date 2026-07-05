export default function BaptismWebsite() {
  const activities = [
    {
      title: "Γαλαξίδι",
      description:
        "Το Γαλαξίδι είναι μια γραφική, ήσυχη παραθαλάσσια πόλη με νησιώτικη ατμόσφαιρα.",
      icon: "⚓",
    },
    {
      title: "Δελφοί",
      description:
        "Οι Δελφοί, ο υποτιθέμενος «ομφαλός του κόσμου», ήταν στην αρχαιότητα το σημαντικότερο ιερό και μαντείο του θεού Απόλλωνα. Σήμερα είναι Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO.",
      icon: "🏛️",
    },
    {
      title: "Μέρα στην παραλία",
      description:
        "Υπάρχουν αρκετές όμορφες παραλίες· ιδιαίτερα μας αρέσουν οι παραλίες στον Άγιο Ισίδωρο.",
      icon: "☀",
    },
    {
      title: "Δίστομο",
      description:
        "Σε αυτό το χωριό γεννήθηκε ο Κώστας· θα μπορούσαμε να βρεθούμε την Παρασκευή το βράδυ για ένα ποτό στην πλατεία του χωριού.",
      icon: "👨",
    },
  ];

  const schedule = [
    {
      time: "11:45",
      title: "Άφιξη στο μοναστήρι",
      description:
        "Παρακαλούμε να είστε λίγο νωρίτερα εκεί, ώστε να ξεκινήσουμε όλοι μαζί.",
    },
    {
      time: "12:00",
      title: "Τελετή βάφτισης",
      description: "Η βάφτιση θα γίνει στο μοναστήρι.",
    },
    {
      time: "13:00",
      title: "Κοινή δεξίωση",
      description: "Θα κάνουμε πρόποση στο προαύλιο του μοναστηριού και θα βγάλουμε φωτογραφίες.",
    },
    {
      time: "14:30",
      title: "Γεύμα & χρόνος μαζί",
      description: "Στη συνέχεια θα γευματίσουμε όλοι μαζί στον χώρο της δεξίωσης.",
    },
  ];

  const validateData = () => {
    const activitiesValid = activities.every(
      (activity) =>
        typeof activity.title === "string" &&
        activity.title.trim().length > 0 &&
        typeof activity.description === "string" &&
        activity.description.trim().length > 0 &&
        typeof activity.icon === "string" &&
        activity.icon.trim().length > 0
    );

    const scheduleValid = schedule.every(
      (item) =>
        typeof item.time === "string" &&
        item.time.trim().length > 0 &&
        typeof item.title === "string" &&
        item.title.trim().length > 0 &&
        typeof item.description === "string" &&
        item.description.trim().length > 0
    );

    if (!activitiesValid) {
      throw new Error("Μη έγκυρα δεδομένα activity στο BaptismWebsite.");
    }

    if (!scheduleValid) {
      throw new Error("Μη έγκυρα δεδομένα schedule στο BaptismWebsite.");
    }
  };

  const runBasicTests = () => {
    if (activities.length !== 4) {
      throw new Error("Αναμένονται ακριβώς τέσσερις δραστηριότητες.");
    }

    if (schedule.length < 4) {
      throw new Error("Το πρόγραμμα πρέπει να περιέχει τουλάχιστον τέσσερα σημεία.");
    }
  };

  validateData();
  runBasicTests();

  const Sailboat = ({ className = "", flip = false }) => (
  <svg
    viewBox="0 0 220 160"
    className={className}
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M24 132C42 126 61 127 78 131C96 135 114 136 131 132C151 127 171 127 194 132" />
      <path d="M58 114C84 112 112 112 145 115C140 124 119 131 98 131C80 131 63 126 58 114Z" />
      <path d="M99 38V115" />
      <path d="M100 39C75 51 60 76 54 113C72 106 88 98 100 89V39Z" />
      <path d="M103 45C131 54 151 79 159 113C138 107 119 99 103 89V45Z" />
      <path d="M100 39L102 21" />
      <path d="M102 21C110 23 116 27 121 33C113 33 107 31 101 29" />
      <path d="M69 121C81 124 93 126 106 126C118 126 131 124 142 120" />
      <path d="M38 142C50 139 59 139 69 142" />
      <path d="M127 143C138 141 148 141 161 143" />
      <path d="M80 146C94 143 112 143 128 146" />
    </g>
  </svg>
);

  // Όλες οι τοποθεσίες σε έναν χάρτη. Προσαρμόστε τις συντεταγμένες αν χρειάζεται:
  // [πλάτος, μήκος]. Το μοναστήρι είναι ακριβές· τα υπόλοιπα σημεία είναι κοντά –
  // ο σύνδεσμος στο αναδυόμενο παράθυρο οδηγεί πάντα στο σωστό σημείο στο Google Maps.
  const locations = [
    {
      label: "Βάφτιση",
      name: "Μονή Οσίου Λουκά",
      icon: "⛪",
      coords: [38.3951474, 22.7464051],
      query: "Osios Loukas Monastery",
    },
    {
      label: "Δεξίωση",
      name: "Valaouras, Poseidonos 90, Antikyra",
      icon: "🍽️",
      coords: [38.3767881, 22.6322011],
      query: "Valaouras Antikyra",
    },
    {
      label: "Γιορτή την παραμονή",
      name: "Buddha, Άγιος Ισίδωρος",
      icon: "🥂",
      coords: [38.3615133, 22.6160948],
      query: "Buddha Agios Isidoros Antikyra",
    },
    {
      label: "Διαμονή",
      name: "Antikyra Beach Hotel",
      icon: "🏨",
      coords: [38.3798, 22.6369],
      query: "Antikyra Beach Hotel Antikyra",
    },
    {
      label: "Εκδρομή",
      name: "Γαλαξίδι",
      icon: "⚓",
      coords: [38.3775349, 22.3829923],
      query: "Galaxidi Greece",
    },
    {
      label: "Εκδρομή",
      name: "Δελφοί",
      icon: "🏛️",
      coords: [38.4800928, 22.4995954],
      query: "Delphi Archaeological Museum",
    },
    {
      label: "Εκδρομή",
      name: "Δίστομο",
      icon: "🏘️",
      coords: [38.4291946, 22.6672151],
      query: "Distomo Greece",
    },
  ];

  // Διαδραστικός χάρτης (Leaflet + OpenStreetMap, χωρίς κλειδί API).
  const LocationsMap = ({ locations }) => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
      if (!containerRef.current || typeof L === "undefined") return;

      const map = L.map(containerRef.current, { scrollWheelZoom: false });
      // Δορυφορική προβολή («Earth», Esri World Imagery, χωρίς κλειδί API).
      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          maxZoom: 19,
          attribution:
            "Tiles &copy; Esri — Πηγή: Esri, Maxar, Earthstar Geographics",
        }
      ).addTo(map);

      // Προσαρμοσμένα σημεία σε στυλ σταγόνας στο μπλε της σελίδας, με emoji ανά τοποθεσία.
      const pinIcon = (emoji) =>
        L.divIcon({
          className: "taufe-pin",
          html:
            '<div style="width:34px;height:34px;border-radius:50% 50% 50% 0;' +
            "background:#183b78;transform:rotate(-45deg);" +
            "box-shadow:0 3px 8px rgba(24,59,120,.4);border:2px solid #fff;" +
            'display:flex;align-items:center;justify-content:center;">' +
            '<span style="transform:rotate(45deg);font-size:15px;line-height:1;">' +
            emoji +
            "</span></div>",
          iconSize: [34, 34],
          iconAnchor: [17, 34],
          popupAnchor: [0, -32],
        });

      const markers = locations.map((loc) => {
        const link =
          "https://www.google.com/maps/search/?api=1&query=" +
          encodeURIComponent(loc.query);
        return L.marker(loc.coords, { icon: pinIcon(loc.icon) })
          .addTo(map)
          .bindPopup(
            "<strong>" +
              loc.label +
              "</strong><br>" +
              loc.name +
              '<br><a href="' +
              link +
              '" target="_blank" rel="noopener" ' +
              'style="display:inline-block;margin-top:6px;color:#183b78;font-weight:600;text-decoration:none;white-space:nowrap;">' +
              "📍 Χάρτης</a>"
          );
      });

      if (markers.length) {
        map.fitBounds(L.featureGroup(markers).getBounds().pad(0.25));
      }

      return () => map.remove();
    }, [locations]);

    return (
      <div
        ref={containerRef}
        className="mt-6 h-80 w-full overflow-hidden rounded-2xl border border-[#b9cde7]"
      />
    );
  };

  const cardClass =
    "rounded-[2rem] border border-[#b9cde7] bg-white/50 shadow-sm backdrop-blur-sm";

  const infoCardClass =
    "rounded-3xl border border-[#b9cde7] bg-white/40 p-5 shadow-sm backdrop-blur-sm";

  return (
    <div className="min-h-screen bg-[#dceaf8] text-[#183b78]">
      <section className="relative overflow-hidden border-b border-[#b9cde7] bg-[#dceaf8]">
        <div className="absolute left-6 top-10 opacity-90 md:left-16 md:top-14">
          <Sailboat className="h-32 w-32 text-[#183b78]/30 md:h-52 md:w-52" />
        </div>
        <div className="absolute right-4 top-8 opacity-80 md:right-12 md:top-12">
          <Sailboat className="h-20 w-20 text-[#183b78]/30 md:h-32 md:w-32" flip={true} />
        </div>
        <div className="absolute bottom-8 right-10 hidden opacity-85 md:block">
          <Sailboat className="h-36 w-36 text-[#183b78]/25" flip={true} />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#183b78]/80">
              Πρόσκληση στη βάφτιση
            </p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Καλώς ήρθατε στη
            </h1>
            <p className="mt-4 font-serif text-5xl italic leading-none md:text-8xl">
              Βάφτιση
            </p>
            <p className="mt-3 text-xl md:text-2xl">του Λουκά</p>
            <p className="mt-4 text-xl text-[#183b78]/60">~ ~ ~</p>
            <p className="mt-6 text-lg leading-8 text-[#183b78]/80 md:text-xl">
              Χαιρόμαστε πολύ που θα γιορτάσουμε αυτή την ξεχωριστή μέρα μαζί σας.
              Σε αυτή τη σελίδα θα βρείτε όλες τις σημαντικές πληροφορίες σχετικά με τη βάφτιση.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className={infoCardClass}>
                <p className="text-sm text-[#183b78]/70">Ημερομηνία</p>
                <p className="mt-1 text-lg font-semibold">30 Αυγούστου 2026</p>
              </div>
              <div className={infoCardClass}>
                <p className="text-sm text-[#183b78]/70">Ώρα</p>
                <p className="mt-1 text-lg font-semibold">12:00</p>
              </div>
              <div className={infoCardClass}>
                <p className="text-sm text-[#183b78]/70">Τοποθεσία</p>
                <p className="mt-1 text-lg font-semibold">Μονή Οσίου Λουκά</p>
              </div>
            </div>

            <div className={`${cardClass} mt-8 p-8 text-left`}>
              <h2 className="text-2xl font-semibold">Γιορτή την παραμονή</h2>
              <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>
              <p className="mt-5 text-lg leading-8 text-[#183b78]/80">
                Ήδη από το βράδυ της παραμονής θα θέλαμε να βρεθούμε μαζί σας.
                Συναντιόμαστε στον χώρο <span className="font-semibold text-[#183b78]">Buddha</span> (στον Άγιο Ισίδωρο) στις <span className="font-semibold text-[#183b78]">19:30</span>, για να δειπνήσουμε μαζί και να γιορτάσουμε λίγο. Συνιστάται να πάρετε ταξί.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${cardClass} p-8`}>
            <h2 className="text-2xl font-semibold">Πότε και πού θα γίνει η βάφτιση;</h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>

            <div className="mt-6 space-y-6 text-[#183b78]/85">
              <div>
                <p className="font-semibold text-[#183b78]">Βάφτιση</p>
                <p>
                  <span className="font-semibold">Μοναστήρι:</span> Όσιος Λουκάς
                </p>
 <p>
                  <span className="font-semibold">Διεύθυνση:</span> Monastery of Hosios Loukas, 32100
                </p>
                <p>
                  <span className="font-semibold">Έναρξη:</span> 12:00
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#183b78]">Δεξίωση</p>
                <p>
                  <span className="font-semibold">Χώρος:</span> Valaouras
                </p>
                <p>
                  <span className="font-semibold">Διεύθυνση:</span> Poseidonos 90, 32012 Antykira
                </p>
                <p>
                  <span className="font-semibold">Έναρξη:</span> 14:30
                </p>
                <p className="mt-2">
                  Παρακαλούμε ενημερώστε μας αν προτιμάτε ψάρι ή κρέας.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#183b78]">Ενδυματολογικός κώδικας</p>
                <p>Παρακαλούμε θυμηθείτε να καλύψετε ώμους και γόνατα μέσα στο μοναστήρι. </p>
              </div>

              <div>
                         <p className="font-semibold text-[#183b78]">Διάφορα</p>
                <p>Κατά τη διάρκεια της τελετής, ένας φωτογράφος θα αποτυπώσει τις πιο όμορφες στιγμές για εμάς. Γι' αυτό σας παρακαλούμε να μην βγάζετε φωτογραφίες μέσα στο μοναστήρι. </p>
              </div>
            </div>
          </div>

          <div className={`${cardClass} p-8`}>
            <h2 className="text-2xl font-semibold">Σύντομο πρόγραμμα</h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>

            <div className="mt-6 space-y-5">
              {schedule.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="border-l-2 border-[#183b78]/30 pl-4"
                >
                  <p className="text-sm uppercase tracking-wide text-[#183b78]/65">
                    {item.time}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-[#183b78]/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#b9cde7] bg-[#d7e6f6]/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#183b78]/80">
              Για τους καλεσμένους μας
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Δραστηριότητες στη γύρω περιοχή
            </h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>
            <p className="mt-4 text-lg text-[#183b78]/80">
              Για όσους έρχονται από μακριά ή θα περάσουν το σαββατοκύριακο στην περιοχή, συγκεντρώσαμε εδώ μερικές όμορφες ιδέες.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="rounded-[2rem] border border-[#b9cde7] bg-white/45 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="text-2xl text-[#183b78]">{activity.icon}</div>
                <h3 className="mt-3 text-xl font-semibold">{activity.title}</h3>
                <p className="mt-3 leading-7 text-[#183b78]/80">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className={`${cardClass} p-6`}>
            <h2 className="text-2xl font-semibold">Πρόσβαση & στάθμευση</h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>
            <div className="mt-5 space-y-4 leading-7 text-[#183b78]/80">
              <p>
                <span className="font-semibold text-[#183b78]">Διαμονή:</span> Οι περισσότεροι από εσάς θα διαμείνετε στο Antikyra Beach Hotel, 25is Martiou 2, Antikyra 320 12, Ελλάδα.
              </p>
            </div>
          </div>

          <div className={`${cardClass} p-6`}>
            <h2 className="text-xl font-semibold">Σχετικά με τα δώρα</h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>
            <p className="mt-5 leading-7 text-[#183b78]/80">
              Η παρουσία σας είναι για εμάς το πιο όμορφο δώρο.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#b9cde7] bg-[#cfe1f4] px-8 py-10 shadow-sm md:px-12">
          <div className="absolute right-8 top-8 opacity-70">
            <Sailboat className="h-24 w-24 text-[#183b78]/20 md:h-32 md:w-32" />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Σας περιμένουμε με χαρά
            </h2>
            <p className="mt-3 text-[#183b78]/60">~ ~ ~</p>
            <p className="mt-4 max-w-2xl leading-7 text-[#183b78]/80">
              Για οποιαδήποτε απορία μπορείτε να επικοινωνείτε μαζί μας οποιαδήποτε στιγμή. Θα χαρούμε να ακούσουμε από εσάς.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[#b9cde7] bg-white/45 p-5">
                <p className="text-sm text-[#183b78]/70">Σαμπρίνα</p>
                <p className="mt-1 text-lg font-semibold">0177 3778589</p>
              </div>
              <div className="rounded-3xl border border-[#b9cde7] bg-white/45 p-5">
                <p className="text-sm text-[#183b78]/70">Κώστας</p>
                <p className="mt-1 text-lg font-semibold">0163 8699787</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Όλες οι τοποθεσίες με μια ματιά</h2>
          <p className="mt-2 text-[#183b78]/70">
            Πατήστε σε ένα σημείο για λεπτομέρειες και διαδρομή στο Google Maps.
          </p>
          <LocationsMap locations={locations} />
        </div>
      </section>
    </div>
  );
}
