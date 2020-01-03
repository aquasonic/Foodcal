import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MealsPerDay, Week } from '../../models/schedule.model';
import { SwitchToNextWeek, SwitchToPreviousWeek } from '../../state/schedule.actions';
import { ScheduleState } from '../../state/schedule.state';

@Component({
    selector: 'fc-schedule-view',
    templateUrl: './schedule-view.component.html'
})
export class ScheduleViewComponent {
    @Select(ScheduleState.week) public week$: Observable<Week>;
    @Select(ScheduleState.mealsOfWeek) public mealsOfWeek$: Observable<MealsPerDay[]>;
    @Select(ScheduleState.loading) public loading$: Observable<boolean>;

    constructor(private store: Store) {}

    onSwitchToNextWeek() {
        this.store.dispatch(new SwitchToNextWeek()).subscribe();
    }

    onSwitchToPreviousWeek() {
        this.store.dispatch(new SwitchToPreviousWeek()).subscribe();
    }
}
