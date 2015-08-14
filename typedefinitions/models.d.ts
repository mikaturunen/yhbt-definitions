/**
 * Simple definitions for the different parts of the objects
 */

interface Task {
    _id?: string;

    /**
     * Task owner. User.userId
     */
    userId: string;

    title: string;
    description: string;

    /**
     * Stored planned events for the task in couples of two. [0,1,2,3,4] => 0 = start, 1 = end for first event,
     * 2 = start for second event and 3 = end for second event. 4 = start of third event and the event has not stopped.
     * This will be used for planning.
     */
    plannedEvents: number[];

    /**
     * Follows the same scheme as plannedEvents for actual "when did the event happen".
     * This will be used for informing when the evnet actually happened.
     */
    actualEvents: number[];

    /**
     * Total spent time on actualEvents
     */
    spentTime: number;
}

interface User {
    _id?: string;
    userId: string;
    username: string;
    passwordHash: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}
