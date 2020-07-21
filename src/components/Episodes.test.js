import React from 'react';
import {render, screen} from '@testing-library/react';
import Episodes from './Episodes';




test ("Episodes component renders", () => {
    render(<Episodes episodes={[]} />);
});

test ("Displays episodes as the episodes prop is updated", () => {
    //assert that with an empty array, no episodes are rendered
    const { rerender } = render (<Episodes episodes={[]} />);
    expect(screen.queryByText(/season 1/i)).toBeNull();
    expect(screen.queryAllByTestId("episodes")).toHaveLength(0);


    //assert that drop down loads different season
    // const dropDown = screen.getByText(/select a season/i);
    // userEvent.click(dropDown);


    //assert that something is in the document
    //rerender(<Episodes episodes={episodesData} />);
    //expect(screen.getByText(/season 1/i)).toBeInTheDocument();
})

//mock data
const episodesData = [
    {
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/episodes/553946"
          }
        }
    },
    {
        "id": 578663,
        "url": "http://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",
        "name": "Chapter Two: The Weirdo on Maple Street",
        "season": 1,
        "number": 2,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"
        },
        "summary": "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/episodes/578663"
          }
        }
    },
]