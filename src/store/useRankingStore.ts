import { create } from 'zustand';
import axios from 'axios';

interface RankingEntry {
  name: string;
  time: number;
  stars: number;
}

interface RankingStore {
  rankings: RankingEntry[];
   
  // eslint-disable-next-line no-unused-vars
  addRanking: (name: string, time: number, stars: number) => Promise<void>;
}

const useRankingStore = create<RankingStore>((set) => ({
  rankings: [], // Initialize rankings as an empty array

  // Add a new ranking entry
  addRanking: async (name, time, stars) => {
    try {
      // Because of the dummy server URL, so I will store the ranking to the local state first
      // Update local state and sort rankings
      set((state) => {
        const newRankings = [...state.rankings, { name, time, stars }];

        // Sort rankings by stars (descending) and time (ascending)
        newRankings.sort((a, b) => {
          if (a.stars === b.stars) {
            return a.time - b.time; // If stars are equal, sort by time (ascending)
          }
          return b.stars - a.stars; // Sort by stars (descending)
        });

        return { rankings: newRankings };
      });

      // Send POST request to the server
      await axios.post('http://xxxxxxxxx/register.php', {
        name,
        time,
        stars,
      });
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  },
}));

export default useRankingStore;
