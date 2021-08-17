   $('#interaction').DataTable({
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
        });
        $("#checkAll").on('change',function(){
        $('#interaction input[type="checkbox"]').prop('checked',$(this).is(":checked"));
    });
  

        $('[id^=is]').hide();

        $("#account").change(function(){          
            var value = $("#account option:selected").val();
            var theDiv = $("#is" + value);

            theDiv.slideDown();
            theDiv.siblings('[id^=is]').slideUp();
        });
