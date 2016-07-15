<section class="eventsHome inverse">
    <div>
        <h1>Calendar</h1>
        <div class="colWrapper">

        <?php
            $events = eo_get_events(array(
                  'numberposts'=>6,
                  'event_start_after'=>'today',
                  'showpastevents'=>false,//Will be deprecated, but set it to true to play it safe.
             ));
        ?>

            <div class="col2">
                <ul>
        <?php
            if ($events):
                $count = 0;
                foreach ($events as $event):
                    $count = $count + 1;

                    if ($count === 4):
        ?>
                </ul>
            </div>
            <div class="col3">
                <ul>
        <?php
                    endif;

                    printf(
                        '<li><a href="%s"><span>%s</span><strong>%s</strong></a></li>',
                        get_permalink($event->ID),
                        eo_get_the_start('jS M', $event->ID,null,$event->occurrence_id),
                        get_the_title($event->ID)
                    );
                endforeach;
            endif;
        ?>
                        </ul>
            </div>
        </div>
        <a href="/calendar" class="btn">Full calendar</a>
    </div>
</section>