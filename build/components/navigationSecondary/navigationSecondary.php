<?php
    /**
     * Displays a list of pages which are either:
     * The children of the current page, or
     * The children of the parent page with a back to parent link
     */
    function getParentId( $pageId, $idsArray) {
        $parentId = wp_get_post_parent_id( $pageId );

        if ( $parentId !== 0 ) {
            array_unshift( $idsArray, $parentId );
            return getParentId( $parentId, $idsArray );
        }

        return $idsArray;
    }

    $curPageId = get_the_ID();

    $idsArray = getParentId( $curPageId, array($curPageId) );

    if (count($idsArray) > 1 || count(get_pages('child_of='.$idsArray[0])) != 0) {

        echo '<div class="navigationSecondary">';
        echo '<h4><a href="' . get_the_permalink($idsArray[0]) . '">' . get_the_title($idsArray[0]) . '</a></h4>';
        echo '<ul class="h3">';
        wp_list_pages(array(
            'title_li' => '',
            'child_of' => $idsArray[0]
        ));
        echo '</ul>';
        echo '</div>';
    }
?>