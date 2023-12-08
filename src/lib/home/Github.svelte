<script>
  import ActivityCalendarWidget from 'activity-calendar-widget/svelte'
  import Title from '../general/Title.svelte';

  let data = []

  const loadGithubActivity = async () => {
    const githubId = 'shalawfatah';
    const githubApi = `https://api.github.com/users/${githubId}/events`;
    const response = await fetch(githubApi);
    const payload = await response.json();

    // 2. Report error if there's
    if (payload?.message) {
      return;
    }

    // 3. Construct the data array which expects obj with 2 keys
    // date: 'yyyy-MM-dd'
    // activities: array of anything
    let eventObj = {};
    payload.forEach((event) => {
      const date = event.created_at.slice(0, 10);
      if (!eventObj[date]) {
        eventObj[date] = [event];
      } else {
        eventObj[date] = [...eventObj[date], event];
      }
    });
    const newData = Object.entries(eventObj).map((entry) => {
      return {
        date: entry[0],
        activities: entry[1],
      };
    });
    data = newData
  }
  loadGithubActivity()
</script>

    <div class="bg-transparent px-8 py-4 w-auto rounded-md">
        <h2 class="text-2xl font-black text-[#111727]">Github Contributions</h2>
        <ActivityCalendarWidget
          daysToRender={120}
          data={data}
          levelColorMode={'dark'}
        />
    </div>

<style>
  img { width: 182px }
</style>